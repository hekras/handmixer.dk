<?php
include "_common.php";

$sql = "select distinct name from invader_editor_saves";
$resultsd1 = mysqli_query($conn, $sql);

echo
    '<table id="login-emb-04-sitelist" class="w3-table-all w3-hoverable">
            <thead>
                <tr class="w3-light-grey">
                    <th>#</th>
                    <th>Name</th>
                </tr>
            </thead>';

while ($row = mysqli_fetch_assoc($resultsd1)) {
    echo "<tr>";
    echo '<td><input class="w3-check" type="checkbox" name="sitelist" id="login-emb-04-site-' . $n . '" value="' . $row['name'] . '"></td>';
    echo "<td>" . $row['name'] . "</td>";
    echo "</tr>";
    $n++;
}

echo "</table>";
echo "<input type='text' id='emb-maxnames' value='" . $n . "' hidden>";

$conn->close();
