import create from 'zustand';

import { getProjects } from '../api/projects';

import { devtools, persist } from 'zustand/middleware';

const projectsStore = set => ({
    projects: [],
    isLoaded: false,

    fetchProjects: async (cancelationToken, isCancel) => {
        try {
            const { data } = await getProjects(cancelationToken);

            set({
                projects: data,
                isLoaded: true,
            });
        } catch (e) {
            if (isCancel(e)) return;
        }
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
