import IDScreenComponent from './id_screen_component';

export default function (props, ref, key) {
    return IDScreenComponent(props, ref, key, {
        id: 'id-herbivore',
        vo: `${CMWN.MEDIA.VO}vo-10-1.mp3`,
        title: `${CMWN.MEDIA.IMAGE}img-10-1.png`,
        correct: `${CMWN.MEDIA.EFFECT}drag-correct.mp3`,
        revealVO: `${CMWN.MEDIA.VO}vo-10-2.mp3`,
        revealContent: <h3>An herbivore is an animal<br/>that eats only plants.</h3>,
        selectables: {
            deer: 'correct',
            possum: 'incorrect',
            tiger: 'incorrect',
            skunk: 'incorrect',
        }
    });
}
