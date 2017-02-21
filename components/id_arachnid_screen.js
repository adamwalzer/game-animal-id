import IDScreenComponent from './id_screen_component';

export default function (props, ref, key) {
    return IDScreenComponent(props, ref, key, {
        id: 'id-arachnid',
        vo: `${CMWN.MEDIA.VO}vo-6-1.mp3`,
        title: `${CMWN.MEDIA.IMAGE}img-6-1.png`,
        correct: `${CMWN.MEDIA.EFFECT}drag-correct.mp3`,
        revealVO: `${CMWN.MEDIA.VO}vo-6-2.mp3`,
        revealContent: (
            <h3>
                An arachnid has 4 pairs<br/>
                of segmented legs and a body<br/>
                that is divided into two parts.
            </h3>
        ),
        selectables: {
            grasshoper: 'incorrect',
            spider: 'correct',
            ladybug: 'incorrect',
            roach: 'incorrect',
        }
    });
}
