// Unified Navigation Function
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
        case 'mindMapping':
            window.location.href = 'mindMapping.html'; // Redirect to Mind Mapping page
            break;
        case 'conceptCards':
            window.location.href = 'conceptCards.html'; // Redirect to Concept Cards page
            break;
        case 'visualization':
            window.location.href = 'visualization.html'; // Redirect to Visualization page
            break;
        case 'storytelling':
            window.location.href = 'storytelling.html'; // Redirect to Storytelling page
            break;
        case 'connectExpert':
            window.location.href = 'connectExpert.html'; // Redirect to Connect to an Expert page
            break;
        default:
            alert('Feature not available!');
    }
}
