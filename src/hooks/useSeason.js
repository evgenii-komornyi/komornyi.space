export const useSeason = () => {
    let images = [];

    const now = new Date();

    const currentMonth = now.getMonth();

    if (currentMonth === 11 || currentMonth === 0 || currentMonth === 1) {
        let image = null;
        for (let i = 0; i <= 4; i++) {
            image = document.createElement('img');
            image.src = `${process.env.REACT_APP_WINTER_IMAGES}winter${i}.png`;
            images = [...images, image];
        }
    } else if (currentMonth === 2 || currentMonth === 3 || currentMonth === 4) {
        let image = null;
        for (let i = 0; i <= 8; i++) {
            image = document.createElement('img');
            image.src = `${process.env.REACT_APP_SPRING_IMAGES}spring${i}.png`;
            images = [...images, image];
        }
    } else if (currentMonth === 5 || currentMonth === 6 || currentMonth === 7) {
        let image = null;
        for (let i = 0; i <= 1; i++) {
            image = document.createElement('img');
            image.src = `${process.env.REACT_APP_SUMMER_IMAGES}summer${i}.png`;
            images = [...images, image];
        }
    } else {
        let image = null;
        for (let i = 0; i <= 4; i++) {
            image = document.createElement('img');
            image.src = `${process.env.REACT_APP_AUTUMN_IMAGES}autumn${i}.png`;
            images = [...images, image];
        }
    }

    return images;
};
