import IDScreenComponent from './id_screen_component';

export default function (props, ref, key) {
    return IDScreenComponent(props, ref, key, {
        id: 'id-mollusk',
        vo: `${CMWN.MEDIA.VO}vo-8-1.mp3`,
        title: `${CMWN.MEDIA.IMAGE}img-8-1.png`,
        correct: `${CMWN.MEDIA.EFFECT}drag-correct.mp3`,
        revealVO: `${CMWN.MEDIA.VO}vo-8-2.mp3`,
        revealContent: (
            <h3>
                A mollusk is an invertebrate<br/>
                animal (no spine) that lives in water<br/>
                or damp areas and usually has<br/>
                an external shell.
            </h3>
        ),
        selectables: {
            octopus: 'incorrect',
            clam: 'correct',
            stingray: 'incorrect',
            scorpian: 'incorrect',
        }
    });
}
