const tipoutData = {
    totalCharged: 327,
    beerCash: 101,
    togoCharged: 17,
    togoCash: 5,
    beertenders: 3,
    cooks: 3
}

export default function TipAlgo(data) {

    const roundTotalCharged = Math.round(data.totalCharged)
    const roundTogoCharged = Math.round(data.togoCharged)

    const totalBtTips = (roundTotalCharged - roundTogoCharged) + data.beerCash
    const cookTipout = Math.round(totalBtTips * .15)
    const togoTipout = Math.round((roundTogoCharged + data.togoCash) * .15)
    const BTTipout = (totalBtTips - cookTipout + togoTipout) / data.beertenders
    const perCookTipout = (data.togoCash + roundTogoCharged + cookTipout - togoTipout) / data.cooks

    console.log({roundTogoCharged, roundTotalCharged, totalBtTips, cookTipout, togoTipout, BTTipout, perCookTipout})

    return {
        beertender: BTTipout.toFixed(2),
        cook: perCookTipout.toFixed(2)
    }
}