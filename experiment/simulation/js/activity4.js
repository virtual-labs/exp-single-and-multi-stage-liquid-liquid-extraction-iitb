var v2 = 19.4;
var v1 = 5;
var N2 = 0.926;
var rho_acetic_acid = 1;
var rho_benzene = 0.87;
var N1 = 3.6;
var vs = 128;
var dropdown_table = `
<br>

<table id="titration-table" class="table">
    <tbody id="first_table_body">

      <tr>
        <th style="font-size: calc(0.7vw + 7px); padding: 2%;" scope="row">Diameter of Test Speciment, d (cm)</th>
        <td>
        <select style="width: 80%;" id="diameter" class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
        </select>
        </td>
      </tr>

      <tr>
      <th style="font-size: calc(0.7vw + 7px)" scope="row">Length of Heat Exchanger, L (cm)</th>
      <td> 
      <select style="width: 80%;" id="ht_length" class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
       </select></td>
    </tr>

    <tr>
    <th style="font-size: calc(0.7vw + 7px)" scope="row">Metal</th>
    <td>
    <select style="width: 80%;" onchange="set_values();" id="metal" class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
    </select></td>
  </tr>
     
    </tbody>
  </table>

`;
var act4_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="activity5();" style="
position: absolute; bottom: 12vh; width: 85%;">Properties Table</button>`;
var start_titration_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="load_dropdowns();" style="
position: absolute; bottom: 12vh; width: 85%;">Next</button>`;
var titration_first_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="perform();" style="
position: absolute; bottom: 12vh; width: 85%;">Next</button>`;
var start_calculation = `<button id="panel1_btn" class="btn btn-primary" onclick="activity5();" style="
position: absolute; bottom: 12vh; width: 85%;">Next</button>`;
var titration_1_img = `
<div id="titration-image">
<img class="titration-img" src="./images/Assembly01.webp" alt="">
</div>
`;
var titration_2_img = `
<img class="titration-img" src="./images/Assembly02.webp" alt="">
`;
var titration_3_img = `
<img class="titration-img" src="./images/Assembly03.webp" alt="">
`;
var titration_4_img = `
<img class="titration-img" src="./images/Assembly04.webp" alt="">
`;
var titration_5_img = `
<img class="titration-img" src="./images/Assembly05.webp" alt="">
`;
function activity4() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    // pp.addtoleftpannel(button);
    // pp.addtoleftpannel(button);
    // pp.addtoleftpannel(button);
    pp.addoffcanvas(3);
    pp.showtitle("Perform Titration", 3);
    pp.showdescription('<p style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: 2.5vw;">Click Next button to Start Titration</p>', 3);
    // document.getElementById('hide_panel3').click();
    pp.showscore(200, 3);
    // pp.addtoleftpannel(obs_table);
    // complete_tab1();
    pp.addtorightpannel(start_titration_btn, 3);
    pp.addtoleftpannel(titration_1_img);
}
var titration_details = `
<div id="titration-des">
    <div style="font-size: calc(1.5vw + 8px);"><span class="text-color-blue">Titrant</span> - NaOH</div>
    <div style="font-size: calc(1.5vw + 8px);"><span class="text-color-blue">Titrate</span> - Extract Phase</div>
    <div style="font-size: calc(1.5vw + 8px);"><span class="text-color-blue">Indicator</span> - Phenolphthalein</div>
</div>
`;
function load_dropdowns() {
    pp.addtoleftpannel(titration_details);
    document.getElementById('panel1_btn').remove();
    pp.showdescription('<p style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: 2.5vw;">Now we will start the Titration</p>', 3);
    pp.addtorightpannel(titration_first_btn, 3);
}
var titration_results = `
<div id="titration-result">
    <div style="font-size: calc(1.5vw + 8px);"><span style="color: red; font-weight: 700;">Please Note down the following readings</span></div>
    <div style="font-size: calc(1.5vw + 8px);"><span class="text-color-blue">Volume of Titrant</span> - 19.4</div>
    <div style="font-size: calc(1.5vw + 8px);"><span class="text-color-blue">Volume of Titrate</span> - 5.0</div>
    <div style="font-size: calc(1.5vw + 8px);"><span class="text-color-blue">Concentration of Titrant (N)</span> - 0.926</div>
</div>
`;
function perform() {
    let image = document.getElementById('titration-image');
    document.getElementById('hide_panel3').click();
    add_loading_text('Opening valve...');
    // image.src = './images/Assembly02.webp';
    document.getElementById('titration-image').innerHTML = titration_2_img;
    setTimeout(() => {
        remove_loading_text();
        add_loading_text('Performing Titration...');
        document.getElementById('titration-image').innerHTML = titration_3_img;
        setTimeout(() => {
            remove_loading_text();
            add_loading_text('Observation...');
            // image.src = './images/Assembly03.webp';
            document.getElementById('titration-image').innerHTML = titration_4_img;
            setTimeout(() => {
                remove_loading_text();
                add_loading_text('Calculating Results...');
                // image.src = './images/Assembly04.webp';
                document.getElementById('titration-image').innerHTML = titration_5_img;
                setTimeout(() => {
                    remove_loading_text();
                    pp.addtoleftpannel(titration_results);
                    document.getElementById('panel1_btn').remove();
                    pp.showdescription('<p style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: 2.5vw;">Click Next to start calculations</p>', 3);
                    pp.addtorightpannel(start_calculation, 3);
                    v2 = 19.4;
                    v1 = 5;
                    N2 = 0.926;
                }, 1000);
            }, 2000);
        }, 3000);
    }, 2000);
}
// function complete_tab1() {
//     let table_body = document.getElementById('table-1-body');
//     for(let i=0; i<table_1.length; i++) {
//         let row = document.createElement('tr');
//         let val1 = std_deviation(table_1[i][0]);
//         table_1[i][0] = parseFloat(val1);
//         let val2 = std_deviation(table_1[i][1]);
//         table_1[i][1] = parseFloat(val2);
//         let val3 = std_deviation(table_1[i][2]);
//         table_1[i][2] = parseFloat(val3);
//         let val4 = std_deviation(table_1[i][3]);
//         table_1[i][3] = parseFloat(val4);
//         let val5 = std_deviation(table_1[i][4]);
//         table_1[i][4] = parseFloat(val5);
//         if(i == 0) {
//         val1 = table_1[i][0].toString();
//          val2 = table_1[i][1].toString();
//          val3 = table_1[i][2].toString();
//          val4 = table_1[i][3].toString();
//          val5 = table_1[i][4].toString();
//         }
//         row.innerHTML = `
//         <td>${i+1}</td>
//         <td>${val1}</td>
//         <td>${val2}</td>
//         <td>${val3}</td>
//         <td>${val4}</td>
//         <td>${val5}</td>
//         `;
//         table_body.append(row);
//     }
// }
// <tr>
//     <th scope="row">1</th>
//     <td>${700}</td>
//     <td>${72}</td>
//     <td>${67.2}</td>
//     <td>${31.3}</td>
//     <td>${36.6}</td>
//   </tr>
//   <tr>
//     <th scope="row">2</th>
//     <td>${std_deviation(580)}</td>
//     <td>${std_deviation(72)}</td>
//     <td>${std_deviation(66.3)}</td>
//     <td>${std_deviation(31.2)}</td>
//     <td>${std_deviation(36.5)}</td>
//   </tr>
//   <tr>
//     <th scope="row">3</th>
//     <td>${std_deviation(440)}</td>
//     <td>${std_deviation(72)}</td>
//     <td>${std_deviation(65.1)}</td>
//     <td>${std_deviation(31.2)}</td>
//     <td>${std_deviation(36.1)}</td>
//   </tr>
//   <tr>
//     <th scope="row">4</th>
//     <td>${std_deviation(340)}</td>
//     <td>${std_deviation(72)}</td>
//     <td>${std_deviation(63.8)}</td>
//     <td>${std_deviation(31.2)}</td>
//     <td>${std_deviation(35.8)}</td>
//   </tr>
//   <tr>
//     <th scope="row">5</th>
//     <td>${std_deviation(260)}</td>
//     <td>${std_deviation(72)}</td>
//     <td>${std_deviation(62.4)}</td>
//     <td>${std_deviation(31.1)}</td>
//     <td>${std_deviation(35.8)}</td>
//   </tr>
//   <tr>
//   <th scope="row">6</th>
//   <td>${std_deviation(180)}</td>
//   <td>${std_deviation(72)}</td>
//   <td>${std_deviation(60)}</td>
//   <td>${std_deviation(31.0)}</td>
//   <td>${std_deviation(35.0)}</td>
// </tr>
//# sourceMappingURL=activity4.js.map