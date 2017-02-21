export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-sneezers"
        >
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-16-1.mp3`} />
            <skoash.Image ref="banner" className="banner animated" src={`${CMWN.MEDIA.IMAGE}img-16-1.png`} />
        </skoash.Screen>
    );
}
