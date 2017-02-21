export default function (props, ref, key, opts = {}) {
    let selectables = _.map(opts.selectables, (message, selectable) =>
        <skoash.ListItem message={message} className={`${selectable} animated`} />
    );

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id={opts.id}
        >
            <skoash.Audio ref="vo" type="voiceOver" src={opts.vo} />
            <skoash.Image ref="title" className="title animated" src={opts.title} />
            {skoash.mixins.SelectableReveal(props, {
                media: [
                    <skoash.MediaSequence ref="correct" silentOnStart>
                        <skoash.Audio type="sfx" src={opts.correct} />
                        <skoash.Audio type="voiceOver" src={opts.revealVO} />
                    </skoash.MediaSequence>,
                    <skoash.Audio
                        ref="incorrect"
                        type="sfx"
                        src={`${CMWN.MEDIA.EFFECT}id-incorrect.mp3`}
                        onPlay={function () {
                            this.updateScreenData({
                                data: {
                                    selectable: {
                                        target: null,
                                    },
                                    reveal: {
                                        open: false,
                                    },
                                }
                            });
                        }}
                        complete
                    />
                ],
                reveals: [
                    <skoash.ListItem ref="correct">
                        {opts.revealContent}
                    </skoash.ListItem>
                ],
                SelectableProps: {
                    answers: ['correct'],
                    bin: (
                        <skoash.Randomizer
                            bin={selectables}
                        />
                    ),
                },
                RevealProps: {
                    onClose: () => {
                        skoash.trigger('goto', {index: _.parseInt(key) + 1});
                    }
                }
            })}
        </skoash.Screen>
    );
}
