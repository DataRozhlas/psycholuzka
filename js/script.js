$(function () {

var colors = ['#EA614A', '#20649B', '#008836', '#6B96CA', '#A38456', '#A87A93', '#D19C95']

var hosp_lecebny = [38456, 37665, 40808, 42009, 39970, 39424, null];

var hosp_oddeleni = [15693, 14845, 19152, 20908, 20035, 20401, null];

var hosp_ambulance = [null, null, 361931, 450166, 495383, 613644, 652780];

var roky_hosp = [1990, 1995, 2000, 2005, 2010, 2015, 2017];

var roky_hosp_kr = [1990, 1995, 2000, 2005, 2010, 2015];

var roky_dodavky = [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017];

var pocethosp_lecebny = [38456, 37665, 40808, 42009, 39970, 39424];

var pocethosp_oddeleni = [15693, 14845, 19152, 20908, 20035, 20401];

var delkahosp_lecebny = [101.3, 88.7, 79.3, 79.4, 79.9, 76.3];

var delkahosp_oddeleni = [32.6, 28.7, 23.3, 20.9, 20.2, 17.2];

var dodavky_anxiolytika = [45726889, 51806434, 46805744, 55988794, 51356570, 54473043, 55899798, 59361803, 68425676, 71255654, 69649596, 70065009, 69061474, 66152575, 69120411, 62988739, 67380838, 59716283, 58291037, 55931013, 53034671, 48792933, 46403391, 45041486, 43506551, 42638587, 42301245];

var dodavky_hypnotika = [0, 5485, 52470, 646930, 1853700, 2372750, 4072900, 6179065, 9054600, 15890995, 20698235, 25270149, 31638197, 38133866, 44985645, 49374236, 57768589, 56536579, 56841714, 59357159, 60845548, 61896197, 65189485, 71287730, 74250960, 73909190, 77356075];

var dodavky_ssri = [3870, 37783, 334703, 3321721, 5889021, 6433428, 7512086, 11090184, 14809618, 19179053, 26458626, 33592132, 42917169, 55375584, 75348129, 82123311, 99469365, 100923723, 106562413, 117425652, 124505944, 130744348, 137231226, 147418301, 154045578, 157422087, 163958458];

var dodavky_tricyklika = [10212064, 11415954, 11459456, 14995964, 13502708, 13132301, 12514954, 13017227, 13057810, 12759457, 12367441, 11525605, 10735067, 9247466, 9048977, 8002083, 8156684, 7071687, 6468578, 6292293, 5988581, 5302734, 5230601, 5062447, 4935807, 4719650, 4672253];

var dodavky_starsiaps = [13533252,21716153,20763256,21001948,17668919,15103651,14614824,16285016,16296517,15291249,14557176,12878941,11719985,10330390,9999749,10540142,11300242,11315088,10206489,9041003,9380613,10031696,10093679,10240571,10632783,10323935,10865326];

var dodavky_atypaps = [22070,26130,82825,337156,464825,499822,618667,1025913,1557146,2126720,2938226,4239660,5816357,6704977,10187562,11239321,13008932,14136608,16535710,17803625,20439900,21664358,24053906,26879747,28278037,30125097,32334974];

var vek = ["15-17","18-19","20-24","25-29","30-34","35-39","40-44","45-49","50-54","55-59","60-64","65-69","70-74","75-79","80 a více"];

var muzi_1963 = [31.4,77,96,126,132.5,146,141.9,63.6,54,30.4,23,10.4,6.7,4.6,4.5];

var muzi_2013 = [30.7,78.9,190.2,234.9,206.4,216.5,186.8,190.0,155.8,127.6,117.3,97.7,29.8,19.8,26.8];

var zeny_1963 = [20.7,45.5,79.4,90.8,117.5,141.2,146.1,95.8,86,62.3,37.8,21.8,12.8,11.2,10];

var zeny_2013 = [22.1,46.3,100.9,116.4,139.0,167.5,180.5,183.1,159.9,154.7,145.2,152.4,62.0,34.2,33.1];

Highcharts.setOptions({
    lang: {
        months: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
        weekdays: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
        shortMonths: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
        thousandsSep: ' ',
        decimalPoint:',',
        rangeSelectorZoom: 'Zobrazit'
    }
});

Highcharts.chart('hospitalizace', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Návštěvy ambulance/hospitalizace s duševními poruchami'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: roky_hosp
    },
    yAxis: [{
        title: {
            text: 'hospitalizace'
        },
        labels: {
            formatter: function () {
                return this.value;
            }
        }
    }, {
        title: {
            text: 'první návštěvy'
        },
        labels: {
            formatter: function () {
                return this.value/1000 + ' tis.';
            }
        },
        opposite: true
    }],
    tooltip: {
        pointFormat: '{point.series.name}: <b>{point.y}</b><br/>'
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: 'https://www.uzis.cz/katalog/zdravotnicka-statistika/psychiatricka-pece',
        text: 'Zdroj: ÚZIS'
    },
    plotOptions: {
        line: {
            marker: {
                symbol: 'circle'
            }
        }
    },
    series: [{
        name: 'Psychiatrické léčebny',
        data: hosp_lecebny,
        type: 'column',
        yAxis: 0,
        color: colors[6]
    }, {
        name: 'Psychiatrická oddělení nemocnic',
        data: hosp_oddeleni,
        type: 'column',
        yAxis: 0,
        color: colors[4]
    }, {
        name: 'Psychiatrické ambulance',
        data: hosp_ambulance,
        type: 'line',
        yAxis: 1,
        color: colors[1]
    }]
});

Highcharts.chart('lecebny', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Psych. léčebny'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: roky_hosp_kr
    },
    yAxis: [{
    	title: {
    		text: 'pacienti'
    	},
        labels: {
            enabled: true
        },
        min: 0
    }, {
    	title: {
    		text: 'dny'
    	},
    	labels: {
            enabled: true
        },
        min: 0,
        opposite: true
    }],
    tooltip: {
        pointFormat: '{point.series.name}: <b>{point.y}</b><br/>'
    },
    exporting: {
        enabled: false
    },
    credits: {
    	enabled: false
    },
    plotOptions: {
        line: {
            marker: {
                symbol: 'circle'
            }
        }
    },
    series: [{
        name: 'počet hosp.',
        data: pocethosp_lecebny,
        color: colors[0],
        yAxis: 0
    }, {
        name: 'délka hosp.',
        data: delkahosp_lecebny,
        color: colors[1],
        yAxis: 1
    }]
});

Highcharts.chart('oddeleni', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Psych. odd. nem.'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: roky_hosp_kr
    },
    yAxis: [{
    	title: {
    		text: 'pacienti'
    	},
        labels: {
            enabled: true
        },
        min: 0
    }, {
    	title: {
    		text: 'dny'
    	},
    	labels: {
            enabled: true
        },
        min: 0,
        opposite: true
    }],
    tooltip: {
        pointFormat: '{point.series.name}: <b>{point.y}</b><br/>'
    },
    exporting: {
        enabled: false
    },
    credits: {
    	enabled: false
    },
    plotOptions: {
        line: {
            marker: {
                symbol: 'circle'
            }
        }
    },
    series: [{
        name: 'počet hosp.',
        data: pocethosp_oddeleni,
        color: colors[0],
        yAxis: 0
    }, {
        name: 'délka hosp.',
        data: delkahosp_oddeleni,
        color: colors[1],
        yAxis: 1
    }]
});

Highcharts.chart('deprese', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Spotřeba léků na deprese/úzkosti'
    },
    subtitle: {
        text: 'v definovaných denních dávkách'
    },
    xAxis: {
        categories: roky_dodavky
    },
    yAxis: {
        title: {
            text: 'mil. DDD'
        },
        labels: {
            formatter: function () {
                return this.value / 1000000;
            }
        },
        max: 180000000,
        endOnTick: false
    },
    tooltip: {
        pointFormat: '{point.series.name}: <b>{point.y}</b> definovaných denních dávek<br/>'
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: 'https://opendata.sukl.cz/?q=katalog/dodavky-lecivych-pripravku',
        text: 'Zdroj: SÚKL'
    },
    plotOptions: {
        line: {
            marker: {
                symbol: 'circle'
            }
        }
    },
    series: [{
        name: '„Moderní“ SSRI antidepresiva',
        data: dodavky_ssri,
        color: colors[0]
    }, {
        name: '„Stará“ tricyklická antidepresiva',
        data: dodavky_tricyklika,
        color: colors[1]
    }, {
        name: 'Anxiolytika (benzodiazepiny)',
        data: dodavky_anxiolytika,
        color: colors[2]
    }, {
        name: 'Hypnotika',
        data: dodavky_hypnotika,
        color: colors[4]
    }]
});

Highcharts.chart('depresestacked', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Spotřeba léků na deprese/úzkosti, kumulativně'
    },
    subtitle: {
        text: 'v definovaných denních dávkách'
    },
    xAxis: {
        categories: roky_dodavky
    },
    yAxis: {
        title: {
            text: 'mil. DDD'
        },
        labels: {
            formatter: function () {
                return this.value / 1000000;
            }
        },
        max: 300000000,
        endOnTick: false,
        reversedStacks: false
    },
    tooltip: {
        pointFormat: '{point.series.name}: <b>{point.y}</b> definovaných denních dávek<br/>',
        shared: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: 'https://opendata.sukl.cz/?q=katalog/dodavky-lecivych-pripravku',
        text: 'Zdroj: SÚKL'
    },
    plotOptions: {
        area: {
            stacking: 'normal',
            marker: {
                symbol: 'circle'
            }
        }
    },
    series: [{
        name: '„Moderní“ SSRI antidepresiva',
        data: dodavky_ssri,
        color: colors[0]
    }, {
        name: '„Stará“ tricyklická antidepresiva',
        data: dodavky_tricyklika,
        color: colors[1]
    }, {
        name: 'Anxiolytika (benzodiazepiny)',
        data: dodavky_anxiolytika,
        color: colors[2]
    }, {
        name: 'Hypnotika',
        data: dodavky_hypnotika,
        color: colors[4]
    }]
});

Highcharts.chart('schizo', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Spotřeba léků na schizofrenii'
    },
    subtitle: {
        text: 'v definovaných denních dávkách'
    },
    xAxis: {
        categories: roky_dodavky
    },
    yAxis: {
        title: {
            text: 'mil. DDD'
        },
        labels: {
            formatter: function () {
                return this.value / 1000000;
            }
        },
        max: 35000000,
        endOnTick: false
    },
    tooltip: {
        pointFormat: '{point.series.name}: <b>{point.y}</b> definovaných denních dávek<br/>'
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: 'https://opendata.sukl.cz/?q=katalog/dodavky-lecivych-pripravku',
        text: 'Zdroj: SÚKL'
    },
    plotOptions: {
        line: {
            marker: {
                symbol: 'circle'
            }
        }
    },
    series: [{
        name: 'První generace antipsychotik',
        data: dodavky_starsiaps,
        color: colors[3]
    }, {
        name: 'Atypická antipsychotika',
        data: dodavky_atypaps,
        color: colors[5]
    }]
});

Highcharts.chart('schizostacked', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Spotřeba léků na schizofrenii, kumulativně'
    },
    subtitle: {
        text: 'v definovaných denních dávkách'
    },
    xAxis: {
        categories: roky_dodavky
    },
    yAxis: {
        title: {
            text: 'mil. DDD'
        },
        labels: {
            formatter: function () {
                return this.value / 1000000;
            }
        },
        max: 45000000,
        endOnTick: false,
        reversedStacks: false
    },
    tooltip: {
        pointFormat: '{point.series.name}: <b>{point.y}</b> definovaných denních dávek<br/>',
        shared: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: 'https://opendata.sukl.cz/?q=katalog/dodavky-lecivych-pripravku',
        text: 'Zdroj: SÚKL'
    },
    plotOptions: {
        area: {
            stacking: 'normal',
            marker: {
                symbol: 'circle'
            }
        }
    },
    series: [{
        name: 'První generace antipsychotik',
        data: dodavky_starsiaps,
        color: colors[3]
    }, {
        name: 'Atypická antipsychotika',
        data: dodavky_atypaps,
        color: colors[5]
    }]
});

Highcharts.chart('dozitimuzi', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Muži hospitalizovaní se schizofrenií'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: vek
    },
    yAxis: {
        title: {
            text: 'hosp. na 100 tisíc obyv.'
        },
        labels: {
            formatter: function () {
                return this.value;
            }
        }
    },
    tooltip: {
        pointFormat: '{point.series.name}: <b>{point.y}</b> hosp. se schizofrenií na 100 tisíc obyv.<br/>'
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: 'https://www.uzis.cz/katalog/zdravotnicka-statistika/psychiatricka-pece',
        text: 'Zdroj: ÚZIS'
    },
    series: [{
        name: '1963',
        data: muzi_1963,
        color: colors[3]
    }, {
        name: '2013',
        data: muzi_2013,
        color: colors[1]
    }]
});

Highcharts.chart('dozitizeny', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Ženy hospitalizované se schizofrenií'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: vek
    },
    yAxis: {
        title: {
            text: 'hosp. na 100 tisíc obyv.'
        },
        labels: {
            formatter: function () {
                return this.value;
            }
        }
    },
    tooltip: {
        pointFormat: '{point.series.name}: <b>{point.y}</b> hosp. se schizofrenií na 100 tisíc obyv.<br/>'
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: 'https://www.uzis.cz/katalog/zdravotnicka-statistika/psychiatricka-pece',
        text: 'Zdroj: ÚZIS'
    },
    series: [{
        name: '1963',
        data: zeny_1963,
        color: colors[6]
    }, {
        name: '2013',
        data: zeny_2013,
        color: colors[0]
    }]
});

})