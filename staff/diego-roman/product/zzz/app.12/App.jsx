var useState = React.useState

function App() {
    console.log('App -> render')

    var viewState = useState('welcome')
    var view = viewState[0]
    var setView = viewState[1]

    console.log('App -> state: view = ' + view)

    return <>
        <h1>App</h1>

        {view === 'welcome' && <WelcomeView
            onRegisterClick={function () {
                setView('register')
            }}

            onLoginClick={function () {
                setView('login')
            }}
        />}

        {view === 'register' && <RegisterView
            onLoginClick={function () {
                setView('login')
            }}

            onRegisterSuccess={function () {
                setView('login')
            }}
        />}

        {view === 'login' && <LoginView
            onRegisterClick={function () {
                setView('register')
            }}

            onLoginSuccess={function () {
                setView('home')
            }}
        />}

        {view === 'home' && <HomeView
            onLogout={function () {
                setView('login')
            }}
        />}
    </>
}