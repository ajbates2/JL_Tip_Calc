const tipoutData = {
    totalCharged: 327,
    beerCash: 101,
    togoCharged: 17,
    togoCash: 5,
    beertenders: 3,
    cooks: 3
}

export default function TipAlgo(data) {
    const totalBtTips = (data.totalCharged - data.togoCharged) + data.beerCash
    const cookTipout = Math.round(totalBtTips * .15)
    const togoTipout = Math.round((data.togoCharged + data.togoCash) * .15)
    const BTTipout = (totalBtTips - cookTipout + togoTipout) / data.beertenders
    const perCookTipout = (data.togoCash + data.togoCharged + cookTipout - togoTipout) / data.cooks
    return {
        beertender: BTTipout.toFixed(2),
        cook: perCookTipout.toFixed(2)
    }
}