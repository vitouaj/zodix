const calculateSign = (month, day) => {
    // const { day, month} = dateObject
    switch (month) {
        case 3:
            if (21<=day) return "Aries"
            return "Pisces"
        case 4:
            if (20<=day) return "Taurus"
            return "Aries"
        case 5:
            if (21<=day) return "Gemini"
            return "Taurus"
        case 6:
            if (21<=day) return "Cancer"
            return "Gemini"
        case 7:
            if (23<=day) return "Leo"
            return "Cancer"
        case 8:
            if (23<=day) return "Virgo"
            return "Leo"
        case 9:
            if (23<=day) return "Libra"
            return "Virgo"
        case 10:
            if (23<=day) return "Scorpio"
            return "Libra"
        case 11:
            if (22<=day) return "Sagittarius"
            return "Scorpio"
        case 12:
            if (22<=day) return "Capricorn"
            return "Sagittarius"
        case 1:
            if (20<=day) return "Aquarius"
            return "Capricorn"
        case 2:
            if (19<=day) return "Pisces"
            return "Aquarius"
    }
}

const result = calculateSign(5, 12);


console.log(result)