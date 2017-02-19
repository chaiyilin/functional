_(persons).reduce(function (stat, person) {
    const country = person.address.country;
    stat[country] = _.isUndefined(stat[country]) ? 1 :
    stat[country] + 1;
    return stat;
}, {});