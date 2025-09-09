const projects = [
  {id:1, title:'My first site', desc:'A simple HTML/CSS/JS site.'},
  {id:2, title:'Todo app', desc:'A small todo list made with React Native.'}
];

const list = document.getElementById('projectsList');
projects.forEach(p=>{
  const div = document.createElement('div');
  div.className = 'project-card';
  div.innerHTML = <h3>${p.title}</h3><p>${p.desc}</p>;
  list.appendChild(div);
});

// mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const links = document.getElementById('links');
menuBtn?.addEventListener('click', ()=> {
  if (!links) return;
  links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
  links.style.flexDirection = 'column';
});