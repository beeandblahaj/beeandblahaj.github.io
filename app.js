function accentRandomize() {

    // document.documentElement.style.setProperty('--disk-color-center', '#ff6666');

    const colors = [
        '#ff6666',
        '#ffad4f',
        '#ffea64',
        '#d0ffa9', 
        '#75ffb1',
        '#8df1ed',
        '#55c5e1',
        '#5d74dc',
        '#b23ce5',
        '#ee8cff',
        '#ffcfed',
        '#ff4ea4'
    ];

    let randomIndex = Math.floor(Math.random() * 12);
    document.documentElement.style.setProperty('--accent-color', colors[randomIndex]);

}