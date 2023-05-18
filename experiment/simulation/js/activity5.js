var main_table = `
<div id="act5-main-table" class="table-responsive">
<table  class="table" style="height: 100vh !important;">
    <thead>
      <tr>
        <th scope="col">Sr No.</th>
        <th scope="col">Vol. of Solvent (ml)</th>
        <th scope="col">Volume of extract layer, V<sub>s</sub> (ml)</th>
        <th scope="col">Volume of NaOH required for Extract phase (ml)</th>
        <th scope="col">Amount of Solute extracted, m (gm)</th>
        <th scope="col">Percentage Recovery</th>
        <th id="act5-check" scope="col">Check</th>
      </tr>
    </thead>
    <tbody id="table-5-body">
      <tr>
      <td>1</td>
      <td>${main_table_data[0][0]}</td>
      <td>${main_table_data[0][1]}</td>
      <td>${main_table_data[0][2]}</td>
      <td><input style="width: 100%;" type="text" class="form-control" id="inp-1"></td>
      <td><input style="width: 100%;" type="text" class="form-control" id="inp-2"></td>
      <td><input class="btn btn-primary" onclick="act5_verify();" value="verify" style="width: 100%" type="button"></td>
      </tr>
    </tbody>
    </table>

    </div>
    
`;
var all_properties = `

<div style="overflow-y: auto !important; max-height: 80%;">
<table class="table" style="height: 30% !important;">
    <thead>
      <tr>
        <th style="padding: 2% 2% !important; font-size: calc(0.7vw + 0.7px);;" scope="col">Properties</th>
        <th style="padding: 2% 2% !important; font-size: calc(0.7vw + 0.7px);;" scope="col">values</th>
       
      </tr>

    </thead>
    <tbody>
      <tr>
        <td style="padding: 2% 2% !important; font-size: calc(0.7vw + 0.7px);" scope="row">Density of Acetic Acid (gm/cc)</td>
        <td style="padding: 2% 2% !important; font-size: calc(0.7vw + 0.7px);">1.05</td>
        
      </tr>
      <tr>
        <td style="padding: 2% 2% !important; font-size: calc(0.7vw + 0.7px);" scope="row">Density of benzene (gm/cc)</td>
        <td style="padding: 2% 2% !important; font-size: calc(0.7vw + 0.7px);">0.87</td>
      </tr>
      <tr>
        <td style="padding: 2% 2% !important; font-size: calc(0.7vw + 0.7px);" scope="row">Concentration of Titrant (N1)</td>
        <td style="padding: 2% 2% !important; font-size: calc(0.7vw + 0.7px);" colspan="2">1</td>
        
      </tr>

      <tr>
        <td style="padding: 2% 2% !important; font-size: calc(0.7vw + 0.7px);" scope="row">Volume of Titrant, V<sub>2</sub> (ml)</td>
        <td style="padding: 2% 2% !important; font-size: calc(0.7vw + 0.7px);" colspan="2">19.4</td>
        
      </tr>

    </tbody>
  </table>

  <br>

  <div class="row" style="font-size: calc(0.7vw + 4px);"> 

  <div class="col-12">N<sub>1</sub>V<sub>1</sub> = N<sub>2</sub>V<sub>2</sub></div>  
  <div class="col-12">V<sub>s</sub> => Volume of extract layer in ml</div>
  <div class="col-12">m (for 128 ml solution in grams) = (60 x N<sub>1</sub> x V<sub>s</sub>) / 1000</div>
  <div class="col-12">Percent Recovery = m / (30 x 1.5) x 100</div>
  </div>
  </div>
</div>

`;
var act5_complete_table = `<button id="panel1_btn" class="btn btn-primary" onclick="act5_load_table();" style="
position: absolute; bottom: 12vh; width: 85%;">Properties Table</button>`;
function activity5() {
    pp.clearleftpannel();
    pp.showdescription(all_properties, 3);
    pp.addtoleftpannel(main_table);
}
function act5_verify() {
    let val1 = document.getElementById("inp-1");
    let val2 = document.getElementById("inp-2");
    console.log(parseFloat(val1.value));
    // console.log(Q.value, To.value, Ti.value, ti.value, to.value);
    if (!verify_values(parseFloat(val1.value), main_table_data[0][3])) {
        alert("Calculate Amount of Solute Extrated again");
        return;
    }
    if (!verify_values(parseFloat(val2.value), main_table_data[0][4])) {
        alert("Calculate Percentage recovery again");
        return;
    }
    pp.addtorightpannel(act5_complete_table, 3);
    var bsOffcanvas = new bootstrap.Offcanvas(document.getElementById("offcanvasRight3"));
    bsOffcanvas.show();
}
function act5_load_table() {
    vs = 128;
    document.getElementById('hide_panel3').click();
    pp.clearleftpannel();
    pp.addtoleftpannel(main_table);
    document.getElementById('act5-check').remove();
    let tb = document.getElementById('table-5-body');
    tb.innerHTML = ``;
    for (let i = 0; i < 3; i++) {
        let row = document.createElement('tr');
        // main_table_data[i][3] = (60 * N1 * vs)/1000;
        // main_table_data[i][4] = (main_table_data[i][3]/((30*1.5))*100);
        row.innerHTML = `
      <td>${i + 1}</td>
      <td>${main_table_data[i][0]}</td>
      <td>${main_table_data[i][1]}</td>
      <td>${main_table_data[i][2]}</td>
      <td>${main_table_data[i][3]}</td>
      <td>${main_table_data[i][4].toFixed(2)}</td>
      `;
        tb.append(row);
    }
    console.log(main_table_data);
    document.getElementById('panel1_btn').remove();
    // pp.addtorightpannel(act5_plot_btn, 3);
    pp.showdescription("Experiment Done", 3);
}
//# sourceMappingURL=activity5.js.map