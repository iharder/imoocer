let defaultCity = '合肥';
try {
    if (localStorage.city) {
        defaultCity = localStorage.city;
    }
} catch (e) {
    console.log('localStorage禁用');
}

export default {
    city: defaultCity
}