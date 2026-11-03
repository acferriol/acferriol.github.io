// Progressive enhancement: all projects and contact links work without JS.
const filters = document.querySelector('[data-project-filters]');
const projects = Array.from(document.querySelectorAll('[data-project-topics]'));
const projectStatus = document.querySelector('[data-project-status]');

if (filters && projects.length) {
  filters.hidden = false;
  filters.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (!button || !filters.contains(button)) return;
    const selected = button.dataset.filter;
    let visible = 0;
    for (const project of projects) {
      const matches = selected === 'all' || project.dataset.projectTopics.split(' ').includes(selected);
      project.hidden = !matches;
      if (matches) visible += 1;
    }
    for (const candidate of filters.querySelectorAll('button')) {
      candidate.setAttribute('aria-pressed', String(candidate === button));
    }
    if (projectStatus) projectStatus.textContent = `${visible} ${visible === 1 ? 'project' : 'projects'} shown`;
  });
}

const copyEmail = document.querySelector('[data-copy-email]');
const contactStatus = document.querySelector('[data-contact-status]');
if (copyEmail && navigator.clipboard && window.isSecureContext) {
  copyEmail.hidden = false;
  copyEmail.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('cesponalejandro@gmail.com');
      contactStatus.textContent = 'Email address copied.';
    } catch {
      contactStatus.textContent = 'Copy unavailable. Use the email link or select the address above.';
    }
  });
}
