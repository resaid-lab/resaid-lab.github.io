(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  document.querySelectorAll('.site-nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

(function () {
  var modal = document.querySelector('[data-cite-modal]');
  var output = document.querySelector('[data-cite-output]');
  var title = document.querySelector('[data-cite-paper-title]');
  var copyButton = document.querySelector('[data-cite-copy]');
  var closeButtons = document.querySelectorAll('[data-cite-close]');
  var lastTrigger = null;

  if (!modal || !output || !title || !copyButton) return;

  function setCopyLabel(text) {
    copyButton.textContent = text;
  }

  function getCitation(trigger) {
    var target = trigger.getAttribute('data-cite-target');
    var source = target ? document.getElementById(target) : null;
    if (!source) return '';

    return source.content ? source.content.textContent : source.textContent;
  }

  function openModal(trigger) {
    lastTrigger = trigger;
    output.textContent = getCitation(trigger);
    title.textContent = trigger.getAttribute('data-cite-title') || '';
    modal.hidden = false;
    document.body.classList.add('cite-modal-open');
    setCopyLabel('Copy BibTeX');
    copyButton.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove('cite-modal-open');
    if (lastTrigger) lastTrigger.focus();
  }

  function copyCitation() {
    var text = output.textContent;
    var fallbackCopy = function () {
      var textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.top = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        setCopyLabel('Copied');
      }).catch(function () {
        fallbackCopy();
        setCopyLabel('Copied');
      });
    } else {
      fallbackCopy();
      setCopyLabel('Copied');
    }

    window.setTimeout(function () {
      if (!modal.hidden) setCopyLabel('Copy BibTeX');
    }, 1800);
  }

  document.querySelectorAll('[data-cite-trigger]').forEach(function (button) {
    button.addEventListener('click', function () {
      openModal(button);
    });
  });

  closeButtons.forEach(function (button) {
    button.addEventListener('click', closeModal);
  });

  copyButton.addEventListener('click', copyCitation);

  var dialog = modal.querySelector('.cite-dialog');

  document.addEventListener('keydown', function (event) {
    if (modal.hidden) return;

    if (event.key === 'Escape') {
      closeModal();
      return;
    }

    // Trap focus inside the dialog while it is open.
    if (event.key === 'Tab' && dialog) {
      var focusable = dialog.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
})();

(function () {
  var form = document.querySelector('[data-interest-form]');
  if (!form) return;

  var note = document.querySelector('[data-interest-form-note]');
  var labelFor = function (id) {
    var el = form.querySelector('label[for="' + id + '"]');
    return el ? el.textContent.replace('*', '').trim() : id;
  };

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var fields = ['name', 'email', 'position', 'institution', 'interests', 'links', 'message'];
    var lines = [];
    fields.forEach(function (id) {
      var input = form.querySelector('#' + id);
      if (input && input.value.trim()) {
        lines.push(labelFor(id) + ': ' + input.value.trim());
      }
    });

    var nameInput = form.querySelector('#name');
    var who = nameInput && nameInput.value.trim() ? ' — ' + nameInput.value.trim() : '';
    var subject = '[reSAID Prospective]' + who;
    var body = lines.join('\n\n');
    var mailto = 'mailto:sumon@case.edu?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);

    window.location.href = mailto;
    if (note) {
      note.textContent = 'Your email app should now be open with your message pre-filled — press send to submit. If nothing opened, email sumon@case.edu directly.';
    }
  });
})();

(function () {
  document.querySelectorAll('[data-project-filter-group]').forEach(function (group) {
    var scope = group.getAttribute('data-project-filter-group');
    var buttons = group.querySelectorAll('[data-filter-value]');
    var cards = document.querySelectorAll('[data-project-card][data-filter-scope="' + scope + '"]');

    if (!buttons.length || !cards.length) return;

    group.addEventListener('click', function (event) {
      var button = event.target.closest('[data-filter-value]');
      if (!button) return;

      var filter = button.getAttribute('data-filter-value');

      buttons.forEach(function (candidate) {
        var active = candidate === button;
        candidate.classList.toggle('active', active);
        candidate.setAttribute('aria-pressed', active ? 'true' : 'false');
      });

      cards.forEach(function (card) {
        var categories = (card.getAttribute('data-categories') || '').split(/\s+/);
        var visible = filter === 'all' || categories.indexOf(filter) !== -1;
        card.hidden = !visible;
      });
    });
  });
})();
