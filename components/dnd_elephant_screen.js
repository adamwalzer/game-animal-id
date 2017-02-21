import DropzoneReveal from 'shared/components/dropzone_reveal/0.2';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="dnd-elephant"
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
                    <skoash.ListItem answers={['0']} className="elephant animated" />
                ]}
                dropzoneList={[
                    <skoash.ListItem
                        className="sloth animated"
                        message="sloth"
                        return
                    />,
                    <skoash.ListItem
                        className="ant-eater animated"
                        message="ant-eater"
                        return
                    />,
                    <skoash.ListItem
                        className="elephant animated"
                        message="0"
                        return
                    />
                ]}
                revealList={[
                    <skoash.ListItem ref="elephant">
                        <h3>Elephants are the biggest<br/> land mammals on earth!</h3>
                    </skoash.ListItem>
                ]}
                revealAssets={[
                    <skoash.Audio ref="0" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-20-1.mp3`} />
                ]}
                closeRespond={function () {
                    skoash.trigger('goto', {index: _.parseInt(key) + 1});
                }}
            />
        </skoash.Screen>
    );
}
