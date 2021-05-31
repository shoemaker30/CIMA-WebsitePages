<html>
    <head>
        <title></title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
		<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" rel="stylesheet"> 
        <link rel="stylesheet" href="../../page-defaults/navbar.css">
        <link rel="stylesheet" href="../../page-defaults/grid-layout.css">
        <link rel="stylesheet" href="./cities.css">

    </head>
    <body>
        <script language="javascript" type="text/javascript" src="../../page-defaults/navbar.js"></script>
        <div class="row darkblue">
            <div class="column single page-header">
                <h1>Participating Cities</h1>
            </div>
        </div>
        <div class="row seagreen short">
            <div class="column single">
                <form method="GET" action="index.php" id="get-cities-form">
                    <label>Search for your city:</label>
                </br>
                    <input type="text" name="city">
                    <button type="submit" form="get-cities-form" value="Submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="column single search-results">
                <h1>Cities:</h1>



        <?php
            if(isset($_GET['city'])){

                include '../../page-defaults/dbConfig.php';

                $param = mysqli_real_escape_string($conn, $_GET['city']);
                $sql = "SELECT city_name, county, state FROM city WHERE UPPER(city_name) LIKE '%$param%'";
                $result = $conn->query($sql);
                if($result->num_rows > 0){
                    while($row = $result->fetch_assoc()){
                        echo("<p>".$row["city_name"].", ");
                        echo($row["county"]." County, ");
                        echo($row["state"]."</p>");
                    }
                }  
                else{
                    echo("No results.");
                }
                $conn->close();
            }
        ?>

        
            </div>
        </div>

        <script language="javascript" type="text/javascript" src="../../page-defaults/footer.js"></script>
    </body>
</html>

