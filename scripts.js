// Navigation Function
function navigateTo(page) {
    switch (page) {
        case 'login':
            window.location.href = 'login.html'; // Redirects to the login page
            break;
        case 'signup':
            window.location.href = 'signup.html'; // Redirects to the signup page
            break;
        case 'flowchart':
            window.location.href = 'flowchart.html'; // Redirects to flowchart creation page
            break;
        case 'flashcards':
            window.location.href = 'flashcards.html'; // Redirects to flashcards page
            break;
        case 'mnemonics':
            window.location.href = 'mnemonics.html'; // Redirects to mnemonics page
            break;
        case 'quiz':
            window.location.href = 'quiz.html'; // Redirects to quiz page
            break;
        case 'more':
            window.location.href = 'more.html'; // Redirects to more features page
            break;
        default:
            alert("Page not found!");
    }
}
