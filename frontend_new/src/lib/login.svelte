<script>
import Logo from "$lib/images/fastapi-logo.svg";

let username = "";
let password = "";
</script>
      
<form class="h-screen max-w-sm mx-auto flex flex-col justify-center gap-4">
    <img src={Logo} alt="FastAPI logo" class="self-center mb-4 h-auto max-w-xs" />
    <input bind:value={username} placeholder="Email" type="email" required class="input input-bordered" />
    <input bind:value={password} placeholder="Password" type='password' required class="input input-bordered" />
    <a href="/recover-password" class="link link-primary self-center">Forgot password?</a>
    <button type="submit" class="btn variant-filled-primary">Log In</button>
</form>