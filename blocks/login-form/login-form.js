export default function decorate(block) {
  block.innerHTML = `
    <form class="login-form">
      <h3>Login</h3>
      <label>Email:<br><input type="email" required></label><br>
      <label>Password:<br><input type="password" required></label><br>
      <button type="submit">Login</button>
    </form>
  `;
}
