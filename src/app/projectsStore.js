import create from 'zustand';

import { getProjects } from '../api/projects';

import { devtools, persist } from 'zustand/middleware';

const projectsStore = set => ({
    projects: [],
    isLoaded: false,

    fetchProjects: async () => {
        const { data } = await getProjects();

        set({
            projects: data,
            isLoaded: true,
        });
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
