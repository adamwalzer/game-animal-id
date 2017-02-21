import DropzoneReveal from 'shared/components/dropzone_reveal/0.2';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="dnd-pig"
        >
            <DropzoneReveal
                ref="dropzone-reveal"
                dropzoneAssets={[
                    <skoash.Audio
                        ref="drag"
                        type="sfx"
                        src={`${CMWN.MEDIA.EFFECT}drag.mp3`}
                    />,
                    <skoash.Audio
                        ref="correct"
                        type="sfx"
                        src={`${CMWN.MEDIA.EFFECT}drag-correct.mp3`}
                    />,
                    <skoash.Audio
                        ref="incorrect"
                        type="sfx"
                        src={`${CMWN.MEDIA.EFFECT}drag-incorrect.mp3`}
                        complete
                    />
                ]}
                dropzones={[
                    <skoash.ListItem answers={['0']} className="pig animated" />
                ]}
                dropzoneList={[
                    <skoash.ListItem
                        className="mouse animated"
                        message="mouse"
                        return
                    />,
                    <skoash.ListItem
                        className="hedgehog animated"
                        message="hedgehog"
                        return
                    />,
                    <skoash.ListItem
                        className="pig animated"
                        message="0"
                        return
                    />
                ]}
                revealList={[
                    <skoash.ListItem ref="pig">
                        <h3>
                            Pigs are one of the<br />
                            smartest animals on earth.<br />
                            They are extremely social and<br />
                            form close friendships with<br />
                            each other.
                        </h3>
                    </skoash.ListItem>
                ]}
                revealAssets={[
                    <skoash.Audio ref="0" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-22-2.mp3`} />
                ]}
                closeRespond={function () {
                    skoash.trigger('goto', {index: _.parseInt(key) + 1});
                }}
            />
        </skoash.Screen>
    );
}
