<html>
<head>
    <style>
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            font-family: sans-serif;
        }

        .box {
            box-sizing: border-box;
            position: absolute;
            overflow: hidden;
        }
    </style>
    <title>Super Calendar</title>
</head>

<body>
    <form action="/login" method="post">
        <div class="box" style="left: 20px; top: 20px; font-size: 14px;">Please login to the calendar... or click <a href="/try">here</a> to try as anonymous user</div>
        <div class="box" style="left: 50px; top: 60px; font-size: 14px;">Name</div>
        <input type="text" name="thomas"
            style="position: absolute; left: 90px; top: 55px; width: 200px; height: 25px; font-size: 14px; border: solid black 1px; cursor: pointer;">
        <div class="box" style="left: 20px; top: 100px; font-size: 14px;">Password</div>
        <input type="password" name="heidi"
            style="position: absolute; left: 90px; top: 95px; width: 200px; height: 25px; font-size: 14px; border: solid black 1px; cursor: pointer;">
        <div class="box" style="left: 20px; top: 130px; font-size: 14px;">New user? <a href="/registrer">register new user</a><br></div>
        <input type="submit" value="Submit" style="visibility: hidden;">
    </form>
</body>
</html>
