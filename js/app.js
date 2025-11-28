<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lokal Cafe</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">LOKAL CAFE</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link active" href="index.html">Menu</a></li>
                    <li class="nav-item"><a class="nav-link" href="cart.html">Cart 🛒</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <header class="bg-warning text-white text-center py-5">
        <div class="container">
            <h1>Welcome to Lokal</h1>
            <p class="lead">Serving the best local delights & frappes</p>
        </div>
    </header>

    <div class="container my-5">
        <h2 class="text-center mb-4">Our Menu</h2>
        <div class="row" id="product-list">
            </div>
    </div>

    <script src="js/db.js"></script>
    <script src="js/app.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
