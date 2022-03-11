const Navbar = () => {

  return (

    <main>
      <header class="site-header sticky-top py-1">
        <nav class="container d-flex flex-column flex-md-row justify-content-between">
          <a class="py-2 d-none d-md-inline-block" href="/list">Loginy</a>
          <a class="py-2 d-none d-md-inline-block" href="/"><img src="./logo.PNG"></img></a>
          <a class="py-2 d-none d-md-inline-block" href="#">Prihlásiť sa</a>
        </nav>
      </header>
    </main>

  );
}

export default Navbar;