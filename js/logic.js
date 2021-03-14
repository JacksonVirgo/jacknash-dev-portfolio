let nameHeader, position;
$(() => {
    const name = $('h1');
    const position = $('h3');
    const params = new URLSearchParams(window.location.search);
    name.text("Jack Nash");
    
    let cookPos = Cookies.get('p');
    if (!cookPos) {
        cookPos = params.get('p');
        Cookies.set('p', cookPos);
    }
    position.text(getPosition(cookPos));
});

function getPosition(pos) {
    let position = "";
    switch (pos) {
        case "fs":
            position = "Full-Stack Web Developer";
            break;
        case "ad":
            position = "Administration";
            break;
        case "adas":
            position = "Administrative Assistant";
            break;
        default:
            position = "";
            break;
    }
    return position;
}