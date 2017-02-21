import IDScreenComponent from './id_screen_component';

export default function (props, ref, key) {
    return IDScreenComponent(props, ref, key, {
        id: 'id-carnivore',
        vo: `${CMWN.MEDIA.VO}vo-3-1.mp3`,
        title: `${CMWN.MEDIA.IMAGE}img-3-1.png`,
        correct: `${CMWN.MEDIA.EFFECT}s-3-2.mp3`,
        revealVO: `${CMWN.MEDIA.VO}vo-3-2.mp3`,
        revealContent: <h3>A carnivore is an animal <br /> that eats only meat.</h3>,
        selectables: {
            beaver: 'incorrect',
            gorilla: 'incorrect',
            lion: 'correct',
            giraffe: 'incorrect',
        }
    });
}
