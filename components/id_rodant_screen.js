import IDScreenComponent from './id_screen_component';

export default function (props, ref, key) {
    return IDScreenComponent(props, ref, key, {
        id: 'id-rodant',
        vo: `${CMWN.MEDIA.VO}vo-5-1.mp3`,
        title: `${CMWN.MEDIA.IMAGE}img-4-1.png`,
        correct: `${CMWN.MEDIA.EFFECT}drag-correct.mp3`,
        revealVO: `${CMWN.MEDIA.VO}vo-5-2.mp3`,
        revealContent: (
            <h3>Rodents gnaw and have long incisor<br/>teeth that never stop growing.</h3>
        ),
        selectables: {
            kangaroo: 'incorrect',
            cow: 'incorrect',
            falcon: 'incorrect',
            chipmunk: 'correct',
        }
    });
}
