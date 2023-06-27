var obtable_verified = false;
// var button = `<button class="offcanvasbtn"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight1" aria-controls="offcanvasRight1"><i class="bi bi-gear offcanvasicon"></i></button>`;
var ob_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="activity4();" style="
position: absolute; bottom: 12vh; width: 85%;"> Display Observation Table</button>`;
// pp.addtoleftpannel(table);
// pp.addtoleftpannel("<br>");
// pp.addtoleftpannel(table);
// pp.addcanvas('activiy-1');
// var canvas = pp.canvas;
function activity3() {
    pp.clearleftpannel();
    //   pp.addtoleftpannel(button);
    pp.showdescription('<p style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: 2.5vw;">Fill in the all noted values in table and click verify. <br> 2 points for each correct value</p>', 3);
    pp.showtitle("Complete the Observation Table", 3);
    pp.showscore("100", 3);
    var obtable = `

<br>

<table class="table">
    <thead>
      <tr>
        <th scope="col">Obs No.</th>
        <th scope="col">Flow rate, Q (L/h)</th>
        <th scope="col">T<sub>i</sub> &#8451;</th>
        <th scope="col">T<sub>0</sub> &#8451;</th>
        <th scope="col">t<sub>i</sub> &#8451;</th>
        <th scope="col">t</sub>o</sub> &#8451;</th>
        <th scope="col">Check</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td><input class="form-control" style="width: 100%" type="text" name="" id="Q"></td>
        <td><input class="form-control" style="width: 100%" type="text" name="" id="Ti"></td>
        <td><input class="form-control" style="width: 100%" type="text" name="" id="To"></td>
        <td><input class="form-control" style="width: 100%" type="text" name="" id="ti"></td>
        <td><input class="form-control" style="width: 100%" type="text" name="" id="to"></td>
        <td><input class="btn btn-primary" onclick="act3_verify_obtable();" value="verify" style="width: 100%" type="button"></td>
      </tr>
     
    </tbody>
  </table>

`;
    pp.addtoleftpannel(obtable);
}
function act3_verify_obtable() {
    let Q = document.getElementById("Q");
    let To = document.getElementById("To");
    let Ti = document.getElementById("Ti");
    let ti = document.getElementById("ti");
    let to = document.getElementById("to");
    // console.log(Q.value, To.value, Ti.value, ti.value, to.value);
    if (!verify_values(parseInt(Q.value), 700)) {
        alert("please correct flow rate");
        return;
    }
    if (!verify_values(parseInt(To.value), 67.2)) {
        alert("Please correct outlet temperature of hot fluid");
        return;
    }
    if (!verify_values(parseInt(Ti.value), 72)) {
        alert("Please correct inlet temperature of hot fluid");
        return;
    }
    if (!verify_values(parseInt(ti.value), 31.3)) {
        alert("Please correct inlet temperature of cold fluid");
        return;
    }
    if (!verify_values(parseInt(to.value), 36.6)) {
        alert("Please correct outlet temperature of cold fluid");
        return;
    }
    obtable_verified = true;
    pp.addtorightpannel(ob_btn, 3);
    var bsOffcanvas = new bootstrap.Offcanvas(document.getElementById("offcanvasRight3"));
    bsOffcanvas.show();
}
activity3();
//# sourceMappingURL=activity3.js.map