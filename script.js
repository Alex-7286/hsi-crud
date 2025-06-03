document.addEventListener('DOMContentLoaded', loadDomains);

function loadDomains() {
  const domains = JSON.parse(localStorage.getItem('domains')) || [];
  const list = document.getElementById('domainList');
  list.innerHTML = '';

  domains.forEach((domain, index) => {
    const li = document.createElement('li');
    li.textContent = domain;

    const btn = document.createElement('button');
    btn.textContent = '삭제';
    btn.onclick = () => {
      deleteDomain(index);
    };

    li.appendChild(btn);
    list.appendChild(li);
  });
}

function addDomain() {
  const input = document.getElementById('domainInput');
  const newDomain = input.value.trim();
  if (!newDomain) return;

  const domains = JSON.parse(localStorage.getItem('domains')) || [];
  domains.push(newDomain);
  localStorage.setItem('domains', JSON.stringify(domains));

  input.value = '';
  loadDomains();
}

function deleteDomain(index) {
  const domains = JSON.parse(localStorage.getItem('domains')) || [];
  domains.splice(index, 1);
  localStorage.setItem('domains', JSON.stringify(domains));
  loadDomains();
}
