import create from 'zustand';

import projects from '../data/projects.json';

import { devtools, persist } from 'zustand/middleware';

const projectsStore = set => ({
    projects: [],
    isLoaded: false,

    fetchProjects: () => {
        setTimeout(() => {
            set({ projects, isLoaded: true });
        }, 2000);
    },
});

const useProjectsStore = create(
    devtools(
        persist(projectsStore, {
            name: 'projects',
        })
    )
);

export default useProjectsStore;
