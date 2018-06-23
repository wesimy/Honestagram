
export default function(gender = null){
    if(!gender){
        let genders = ['m','f'];
        gender = genders[Math.floor(Math.random() * genders.length)];
    }
    return `/static/media/svg/avatar/${gender}-${Math.floor((Math.random() * 22) + 1)}.svg`
}