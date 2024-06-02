document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        { name: 'Projeto 1', url: 'https://github.com/seu-usuario/projeto2' },
        { name: 'Projeto 2', url: 'https://github.com/seu-usuario/projeto3' },
        { name: 'Projeto 3', url: 'https://github.com/seu-usuario/projeto4' },
        { name: 'Projeto 5', url: 'https://github.com/seu-usuario/projeto5' },
        { name: 'Projeto 6', url: 'https://github.com/seu-usuario/projeto6' },
        { name: 'Projeto 7', url: 'https://github.com/seu-usuario/projeto7' },
        { name: 'Projeto 8', url: 'https://github.com/seu-usuario/projeto8' },
        { name: 'Projeto 9', url: 'https://github.com/seu-usuario/projeto9' },
        { name: 'Projeto 10', url: 'https://github.com/seu-usuario/projeto10' },
        { name: 'Projeto 11', url: 'https://github.com/seu-usuario/projeto11' },
        { name: 'Projeto 12', url: 'https://github.com/seu-usuario/projeto12' },
        { name: 'Projeto 13', url: 'https://github.com/seu-usuario/projeto13' },
        { name: 'Projeto 14', url: 'https://github.com/seu-usuario/projeto14' },
        { name: 'Projeto 15', url: 'https://github.com/seu-usuario/projeto15' },
        { name: 'All Projects', url: 'https://github.com/ViniciusLgo/udemy/tree/main/projetos_youtube' },
    ];

    const projectList = document.getElementById('project-list');

    projects.forEach(project => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${project.url}" target="_blank">${project.name}</a>`;
        projectList.appendChild(li);
    });
});
