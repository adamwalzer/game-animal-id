export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-welcome"
        >
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-2-1.mp3`} />
            <skoash.Image ref="banner" className="banner animated" src={`${CMWN.MEDIA.IMAGE}img-2-1.png`} />
        </skoash.Screen>
    );
}
