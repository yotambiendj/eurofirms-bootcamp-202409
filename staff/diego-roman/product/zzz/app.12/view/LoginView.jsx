function LoginView(props) {
    console.log('LoginView -> render')

    /*
    props -> { onRegisterClick, onLoginSuccess }
    */

    return <main>
        <h2>Login</h2>

        <form onSubmit={function (event) {
            event.preventDefault()

            var form = event.target

            var username = form.username.value
            var password = form.password.value

            try {
                loginUser(username, password)

                props.onLoginSuccess()
            } catch (error) {
                alert(error.message)

                console.error(error)
            }
        }}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" />

            <button type="submit">Login</button>
        </form>

        <p></p>

        <a href="" onClick={function (event) {
            event.preventDefault()

            props.onRegisterClick()
        }}>Register</a>
    </main>
}