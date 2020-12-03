function extractPasswordInformation(input) {
  const passwordInformation = [];

  for (entry of input) {
    const entryElements = entry.split(' ');
    const passwordEntry = {};

    for (let index = 0; index < entry.length; index++) {
      if (index === 0) {
        passwordEntry['policy'] = entryElements[index].split('-').map(element => {
          return Number(element);
        });
      } else if (index === 1) {
        passwordEntry['letter'] = entryElements[index][0];
      } else if (index === 2) {
        passwordEntry['password'] = entryElements[index];
      }
    }
    passwordInformation.push(passwordEntry);
  }
  return passwordInformation;
}

function validPasswords(passwordBank) {
  const passwordInformation = extractPasswordInformation(passwordBank);
  let numberValid = 0;
  

  for (passwordEntry of passwordInformation) {
    const charAtFirstLocation = passwordEntry.password.charAt(passwordEntry.policy[0] - 1);
    const charAtSecondLocation = passwordEntry.password.charAt(passwordEntry.policy[1] - 1);
    const letterSought = passwordEntry.letter;
    let policiesSatisfied = 0;

    if (charAtFirstLocation === letterSought) policiesSatisfied++;

    if (charAtSecondLocation === letterSought) policiesSatisfied++;

    if (policiesSatisfied === 1) numberValid++;
  }

  return numberValid;
}

const sampleInput = [
  '1-3 a: abade',
  '1-3 b: cdefg',
  '2-9 c: ccccccccc',
];

const puzzleInput = [
  '14-15 v: vdvvvvvsvvvvvfpv', 
  '3-11 k: kkqkkfkkvkgfknkx', 
  '6-10 j: jjjjjjjjjj', 
  '5-10 s: nskdmzwrmpmhsrzts', 
  '13-15 v: vvvvvvkvvvvjzvv', 
  '11-13 h: hhhhhbhhhhdhhh', 
  '14-15 r: rrrrrrrrzrrrrrtl', 
  '2-9 c: llhctjgbz', 
  '13-15 s: ssssxssssssssjs', 
  '6-8 c: lccccqcc', 
  '8-9 n: nnnnnmnch', 
  '4-5 n: jnnnmmpxngbrknzb', 
  '4-7 n: knlnqnnndnn', 
  '13-18 g: ggggggggnggggggggggp', 
  '5-6 m: mmmmgm', 
  '5-10 l: lvlllglllpll', 
  '7-12 z: pszgzqzzzzkw', 
  '1-2 j: pjjqw', 
  '15-16 n: nnnnnnnnnnnnnnpn', 
  '8-14 z: mzzzjzzzzhzzzztznzz', 
  '5-19 q: rnsdfgkqlqjdvrmtsqqh', 
  '1-5 f: ffffff', 
  '4-5 h: hhhhh', 
  '1-7 g: cglgjgflgggxv', 
  '2-3 g: gggpg', 
  '2-8 m: gbsmqmmmsmh', 
  '1-2 j: jjhkmqr', 
  '10-12 s: sssstsstpsssssp', 
  '9-15 k: tkbkkknkcnkgwkfkkkpk', 
  '6-7 m: mmmmmmmm', 
  '6-7 s: lsspssss', 
  '9-13 k: kkgjrvkkkkkkmkkkkzd', 
  '3-5 m: lbmmmzpwm', 
  '2-12 x: xxgwxxtbttcxzmlfwx', 
  '10-13 k: kkkkvkkkkkgkwkzkkkk', 
  '10-12 t: ttdftttttrtqt', 
  '4-8 z: zbzzzzzz', 
  '8-11 g: gctgdgwtspgg', 
  '2-5 l: lllvl', 
  '4-5 f: fwdspfmtts', 
  '5-8 z: zzhzmzzdzzz', 
  '11-12 x: xxxxwxxxxxxx', 
  '17-18 h: hhhhhhhhhhhhhhhhqm', 
  '9-14 j: jtkjwxjgjjjjjzjq', 
  '5-6 p: ddgdbkpdsd', 
  '2-5 c: xczcczc', 
  '6-15 t: ttgjktpwqthftfrt', 
  '13-16 t: tttttttttttttttq', 
  '9-11 t: tgttttttftttc', 
  '4-9 z: zzmzzzzzzzzzc', 
  '5-8 d: sddtvddb', 
  '5-6 l: llllpd', 
  '15-16 s: sssssssssssssssb', 
  '14-16 p: ppppppppppppppph', 
  '2-10 r: mjnczrrnlnv', 
  '9-10 s: ssspsssssrd', 
  '3-5 d: dddddq', 
  '2-3 v: llfv', 
  '7-12 n: dnnnlnbnnnncn', 
  '5-6 g: gsgggg', 
  '5-9 t: tltbtttttt', 
  '1-20 r: rtqtcmmgzfqmxtxqhdrn', 
  '2-6 l: hlkkll', 
  '4-6 c: cwccccc', 
  '3-4 c: gcrdcz', 
  '1-8 v: vvlvdgpvg', 
  '6-17 g: gjccgdglgzgtcggdx', 
  '1-17 l: nlczbmbrwcvgtjmcvcq', 
  '5-11 z: nzppckcknfwllzzzrpp', 
  '6-11 s: smsdjvsssss', 
  '3-4 t: cttt', 
  '1-4 q: tbcq', 
  '2-4 m: jmmmmm', 
  '2-8 h: hhhhhhhm', 
  '9-11 h: phrhhhvhchqhmhh', 
  '6-9 v: vvvvvmvvrvvvvv', 
  '1-2 f: nxfgjfffp', 
  '5-8 w: wwwwtnckwd', 
  '6-12 x: xxnxscxkxxtf', 
  '8-11 l: lllllllllstmllllll', 
  '9-11 p: ppppppppvtfpp', 
  '5-17 f: ffvwffpkfjffbtlfnftl', 
  '2-6 b: gbbgbbbbrbxk', 
  '8-9 t: trtftttttt', 
  '13-17 r: rrgrrvrrrrrbrrzrqr', 
  '10-11 k: kkkkkkrkkkk', 
  '9-11 c: cccccccccncc', 
  '2-5 j: jdfwzrjjtjt', 
  '10-13 r: zrrprxhrrxzmmrbr', 
  '8-13 s: sssjsssgssssbs', 
  '5-6 b: bbbhhkh', 
  '8-9 z: fzrzzzzxgfz', 
  '7-9 l: bllllmllhl', 
  '5-11 g: mqbfgrlgxfgcgggjdstc', 
  '4-11 m: mmmgmmmmmmmxms', 
  '14-17 p: lpppppppppzpppppp', 
  '7-9 d: ddddddddd', 
  '14-15 n: nnnnnnnnnnnnntz', 
  '8-17 n: nnnbgzqbnndnzfsnmsmj', 
  '12-15 l: lllkqllwdxlllvl', 
  '3-11 t: lpdztztgmdwtztj', 
  '2-5 m: rslsm', 
  '5-11 c: ckptcgwqshct', 
  '3-4 v: vvvdv', 
  '4-8 d: dddrhddhddd', 
  '2-5 n: brnnnnn', 
  '1-4 p: qtpp', 
  '5-7 l: lxblllflwl', 
  '16-17 t: ttttttttttttttthm', 
  '5-18 h: hhhthhhhhhhhhhhhhh', 
  '9-17 j: jjjjjjjjbnjjjjjjjjj', 
  '6-7 g: gfggnggrgg', 
  '4-6 n: nnnnwq', 
  '8-9 z: zzzczxzpwzlzdcsz', 
  '7-10 w: wwswwwvwwtwww', 
  '6-8 w: whwwwwlww', 
  '2-14 c: cpccccccrccccck', 
  '1-3 t: bqtbfdrdltn', 
  '3-8 w: qwjhwrnjwsb', 
  '2-4 g: gghg', 
  '2-11 d: htdtljjxrnddxbdnfkwf', 
  '12-14 b: bgbglrlpckgsxbjvqm', 
  '9-14 q: qqgvqqqqqqmqqq', 
  '2-16 m: mbmmmmmmhmmmmmzsbm', 
  '11-12 n: nnxnnnnnnnnn', 
  '6-12 r: rbrfbrnrrrprrczrqr', 
  '1-3 n: nmnqtz', 
  '17-18 h: hhhhhhhhhhhhhhhhfs', 
  '11-13 k: rkmkwrknzfkkm', 
  '2-3 w: bwwwwz', 
  '8-12 s: mssssssssssc', 
  '8-10 f: vzpcxfdfvqjpdkdh', 
  '1-2 b: kbbx', 
  '2-11 d: gqddddcdddf', 
  '3-9 z: lzzqztpzzlzlz', 
  '8-12 k: gkkfkkkmpkkkkktk', 
  '1-4 l: lsqm', 
  '9-11 m: mmzmmmmmmmv', 
  '16-18 f: fffchfffffffffffffw', 
  '7-8 v: wfhbqvxrvqpqvv', 
  '15-16 v: vvvvvvvvvvvvvvtvv', 
  '1-8 c: scwcrqclccccc', 
  '12-15 d: bpdvrddgdtfdgdd', 
  '2-4 k: gkkk', 
  '14-15 x: lxsxljxfxwxxjcwnxxv', 
  '6-7 p: hjxqnppmknskpb', 
  '7-13 b: bbbbbbcblbbbbbvb', 
  '7-9 j: gjjjpjjjhvqj', 
  '3-6 n: nnnnnnn', 
  '7-12 h: wxlhhhbjhhhhxhm', 
  '3-5 t: ttttt', 
  '3-4 n: ntnn', 
  '8-16 b: bhrjmbbbsbbbfbbbpbb', 
  '4-10 p: npsjlpppzgncww', 
  '4-6 p: pvpfxqp', 
  '1-2 f: fvxjf', 
  '3-6 t: trnktdttt', 
  '3-5 v: vvvvvmd', 
  '3-6 z: bzmdfpbwckf', 
  '3-4 h: hhhh', 
  '2-4 x: tshbsbxlkpgs', 
  '1-4 p: ppppbppppppppppp', 
  '2-4 c: cccwc', 
  '6-11 w: sbwwwwwqwmkw', 
  '1-2 f: bxff', 
  '3-8 h: rshhnqkvhh', 
  '2-4 l: lpllll', 
  '9-13 m: ltlmvcnnmmgtm', 
  '4-5 j: szjjjmjb', 
  '6-11 h: hkhdhkhhhhh', 
  '1-4 v: vvlq', 
  '16-17 b: pbdnsbbxbxgbdcqcr', 
  '1-18 n: nnnnnmbnnnnnnnnnnn', 
  '7-12 p: ppwtxzpvpppf', 
  '4-5 r: rrrrr', 
  '13-14 s: sgmdvqpxqqtstgspskf', 
  '4-7 h: hhhwchwh', 
  '7-18 d: ddlddddhjhbdddjdddd', 
  '4-6 l: llllll', 
  '15-16 n: nnnnnnnnnnnnnnzn', 
  '11-16 p: pppdplppppgpppmppppt', 
  '4-5 w: fwzbn', 
  '1-3 p: sjpfb', 
  '3-4 b: bbgbb', 
  '2-13 n: pdnnjnnnnnnnnnn', 
  '6-11 w: wwwkwdwwvcmwg', 
  '1-6 t: dhtmfk', 
  '4-7 d: wgrtpqldqldl', 
  '2-15 z: zjzzzzzzgzzzzjzpzh', 
  '1-6 h: hshhch', 
  '1-2 n: kdnnnnnqnnnnn', 
  '6-8 m: mdfjcclk', 
  '7-19 d: ddwdddddfnddddddddj', 
  '12-15 q: snqnppbsfjzvkxgkfc', 
  '6-7 n: nnnnnnn', 
  '3-4 x: xxghmxsz', 
  '5-6 t: tttgtsjts', 
  '3-5 f: mftfffcgwc', 
  '12-13 w: wpwwwwwwwwwzw', 
  '3-7 m: mmmmmmmmm', 
  '15-18 x: xxxtxxwdvxxxxxxxxkxs', 
  '4-5 w: wnpwwzw', 
  '17-19 n: nnnnnnnnnnnnqnnnndn', 
  '7-8 d: ddddddrf', 
  '9-11 t: ttqtttthttxttt', 
  '1-4 c: gccbr', 
  '5-11 w: wwwwtwmwwwwlw', 
  '6-8 v: vvmwvhvxvgsvftv', 
  '2-11 s: lkvssdschmsgqbbws', 
  '3-7 k: kmkxkckvg', 
  '3-10 l: llxllllllglrllhl', 
  '1-3 b: gbbb', 
  '18-19 v: vvvsvvvvvvvvvvvvvvv', 
  '8-9 d: tzddvdddddd', 
  '2-4 t: tgtbpcv', 
  '1-3 r: hrzrt', 
  '2-4 f: ffqq', 
  '5-6 c: cccjzh', 
  '3-4 j: jjln', 
  '6-8 l: lllllllllll', 
  '9-10 n: nnnnnnnnfr', 
  '8-9 x: xxxxxxxvcx', 
  '5-10 w: wpwwwbwwww', 
  '14-15 p: pppppppppppdphrppp', 
  '9-19 h: whhcthhxhhhhhhghjtwz', 
  '9-13 z: zzzzzpzzzhtzvnzzzzz', 
  '11-13 l: llllllllzlqql', 
  '6-11 b: bhlwpmbbbjzbcxwzmtc', 
  '2-3 q: fqqhfqr', 
  '12-14 m: mmmmdmmmmmmmsm', 
  '1-3 t: gggctqtfpxtrt', 
  '2-3 k: kbkk', 
  '11-14 d: dddddcdddfddddd', 
  '8-19 n: pnnnjnnnwgnnnnsnnnd', 
  '9-10 r: rrtrrrvrqrrrpr', 
  '4-12 k: kxskkkckkkzkz', 
  '1-10 h: tjvhhphpzhjrlhhht', 
  '8-9 c: pkcccccmc', 
  '3-5 h: slwlgwnhcxxdhk', 
  '1-8 l: cllllllqll', 
  '3-4 q: wzqthkjvqct', 
  '4-6 d: ddddddddddd', 
  '2-6 q: qqqbxm', 
  '6-9 b: bbbbbbqbsw', 
  '3-6 c: ccwkpdjccfvc', 
  '9-10 r: rrrrtrrrrr', 
  '1-5 d: phzdmtzshlz', 
  '5-7 q: fqqqqqrqq', 
  '4-5 v: vvvvr', 
  '3-5 k: kkgkk', 
  '3-7 h: wxhgkfhhhqnhdfhg', 
  '5-7 m: mmmwmmmmm', 
  '1-3 z: qsvrzwnxzvl', 
  '7-12 x: tpzblhzfdmxqqmmjfwq', 
  '9-12 m: mmmqmmmmmdmmmm', 
  '15-18 t: ttttttttttttttthtt', 
  '2-12 b: tblhkbgnbbfqvd', 
  '2-3 m: rmqv', 
  '8-17 m: jmcndnqmdjdtqnbvmpn', 
  '5-14 l: lxlfvjnbllllmlllllsb', 
  '4-5 r: rtlmrxxrrnrt', 
  '6-7 k: kkksmkg', 
  '16-19 q: bkwfqstbmqqhzqvqvcqd', 
  '12-13 l: lllllllllllpll', 
  '2-9 m: zgxdbmzrmbbdbw', 
  '7-9 d: bdddddzdk', 
  '18-19 g: wfwggwhxrnnspmvgjrg', 
  '17-18 w: wwwwwwwwwwwwwwwwwwww', 
  '2-6 z: kzzzfzbh', 
  '3-4 c: pcqk', 
  '5-6 t: tthtpx', 
  '10-13 x: xxxxxxxtdtkxqxqxxxx', 
  '1-2 b: qbwd', 
  '13-19 l: llhxsxlllllpllllllfl', 
  '14-15 n: nnnnmnnnnnnnnnqn', 
  '6-7 m: mjmhsdmmm', 
  '3-5 r: qqshck', 
  '8-15 c: clbcccrccscccpcwcc', 
  '9-12 k: kkcwkklkkkcnkkxkk', 
  '4-5 v: vvvppvv', 
  '2-8 t: dxtgttjj', 
  '1-8 r: tqrlhfzk', 
  '8-9 n: zhmtnfsrr', 
  '10-15 d: ddddmldddzddgnk', 
  '13-17 z: jzpzzzzzzzvwnzzbz', 
  '1-5 d: ddkdd', 
  '4-6 x: xsxgbf', 
  '3-8 k: wkckkkcw', 
  '5-7 r: ndprnrxrrrbzrpnrz', 
  '4-6 n: nnnnnnn', 
  '7-8 q: qbmxfhqqqqmhqqq', 
  '9-10 k: swgkcrkdkkjfmkkkjl', 
  '6-8 s: kzqbsxrchhvvfvkqhz', 
  '3-4 h: hmgh', 
  '10-11 b: bsbfbkbwbhh', 
  '9-13 z: nnzzbvzzrzkjnbzqfzzp', 
  '1-11 x: xsxnqgjsqzxxnxd', 
  '12-13 m: mmmmmmmmmmmvm', 
  '11-20 n: vjsnfnnsgnnnmnnnnnwn', 
  '4-11 q: qqqhqnpqbnrqhpd', 
  '10-16 s: hszrsssktsspdtsrssss', 
  '1-4 m: ldmhj', 
  '3-14 l: llxjlmllflzdbll', 
  '11-17 m: mmmmmmmmmmmmmmpmmmm', 
  '1-7 c: jcccccl', 
  '15-16 x: xjxxxxxxxxxxxxxxx', 
  '5-7 v: cvtvcvv', 
  '7-12 p: npppqpgptpjkjpdp', 
  '12-16 c: cwvmnknsbccvccrckqcf', 
  '5-13 v: vrvvvjvvpvvvwvbv', 
  '2-14 l: bkllllllllllldlllk', 
  '4-6 x: qxxxpxs', 
  '9-11 s: sbssssssssm', 
  '7-8 q: vgctvvqq', 
  '3-8 g: ggtgggggggg', 
  '5-6 b: pbbctbbbvnbjbbb', 
  '1-2 w: jwww', 
  '12-14 z: zszzzzznzzztzz', 
  '2-3 j: fnmgcjbjt', 
  '4-9 c: cccphccccpthcwwc', 
  '5-12 g: ggsgxggggsgqggggg', 
  '4-5 v: vvvvvv', 
  '8-17 q: hdhtqlwpzqqqqqpqqhq', 
  '9-15 s: sschdsssnvssvss', 
  '7-8 d: sdhkdtpcdwgddtdd', 
  '1-2 d: ddjdd', 
  '5-9 b: zbzbbbklzbbb', 
  '9-10 g: gggggggggg', 
  '2-4 t: kttt', 
  '6-13 t: pttsttttttttzt', 
  '16-17 h: hhhhhhhhmhhhhhhtdhh', 
  '4-10 r: rmpldrbrqcfqrkhbnqc', 
  '6-14 z: zjzcpzzxzzzctzjz', 
  '6-17 v: hsfctvxwpgsvfnfxwncq', 
  '14-16 p: ppppppppppppplpppppp', 
  '15-18 l: lllllslllllllgnllf', 
  '7-15 v: vvvvvvfpvnvvsvvgvv', 
  '3-4 x: xxsx', 
  '8-13 z: zzwzzrzzzzzqqz', 
  '7-8 r: hrsrrrrzrb', 
  '3-4 b: bzfg', 
  '5-7 h: dhhthhhhr', 
  '1-4 v: vcvv', 
  '5-6 k: pkkkqkkk', 
  '13-20 j: jjjjjsjjjjjjjjjjjjjj', 
  '3-6 p: pgtpptpxptvc', 
  '1-3 v: tvvvv', 
  '6-15 b: mbbbbbbbbbbbbkbb', 
  '11-15 q: qmqqqqqhqqqqqqqqdqcs', 
  '2-6 g: dggggr', 
  '1-4 j: jjldsjjhfg', 
  '2-4 h: vhkwhhnhbhx', 
  '3-5 z: zzzzzz', 
  '2-4 s: stmw', 
  '12-13 k: wkbcmmkhpklkdnnkdvk', 
  '19-20 b: bbbbbbbbbbbbbbbbbbbj', 
  '6-9 w: vwwwtcpwwgw', 
  '3-5 j: jbsjpjj', 
  '10-13 c: cdccqpccccccc', 
  '7-9 q: qpqqqqqqw', 
  '15-16 p: ppppppppppppppbd', 
  '6-13 n: nnnnnqnnnnndknnnnnn', 
  '11-14 t: ttttqtttttjtttt', 
  '4-6 t: tttltz', 
  '3-5 n: nnnrj', 
  '2-13 h: hhhhhhshhmhlkh', 
  '1-6 x: xxxxxcxxxx', 
  '4-7 v: ddswdvq', 
  '3-5 d: xjksdvdddddwcrqzj', 
  '6-7 x: xxxxxfxx', 
  '3-6 b: bbqbbll', 
  '9-12 p: pppppppplppj', 
  '12-13 w: wwwwwwwwwwwwzww', 
  '5-11 q: qztqqwvldnm', 
  '1-4 m: qmmj', 
  '3-7 l: llpllwllt', 
  '2-8 h: hmhhhhhrsfhh', 
  '8-10 g: gggggggqgv', 
  '5-7 g: pggzgggggggb', 
  '4-7 v: gvvxvrv', 
  '3-4 l: llkf', 
  '2-6 q: wqzpqqvdhhjlhkhmwtft', 
  '2-3 n: nnnrd', 
  '1-5 h: kfqqk', 
  '7-12 z: qczzzzdlclzzdpfgzzz', 
  '2-4 m: vrjmnqrmrmvm', 
  '4-6 h: hhhbkhpghh', 
  '5-7 z: zzzzgwbz', 
  '5-7 d: ddddkfdbdnd', 
  '8-10 q: qqxqqgtxqwqg', 
  '5-14 b: bbbbzbbrbbrbbnbbbbbb', 
  '8-10 z: vzzpzkzzgzzzzz', 
  '8-9 w: wwwwwwwwb', 
  '5-11 d: ddqdhddgddddd', 
  '2-9 h: fhhhhhhhhhh', 
  '7-12 b: bbjbbwxbcwbbnb', 
  '1-3 m: tmmdmmmm', 
  '2-3 b: bqtnkbjhlrvz', 
  '2-9 z: nzrbzzrzlzzzvzt', 
  '2-4 v: vvmv', 
  '9-10 q: fccjqpwhqqq', 
  '2-12 q: qqqqqfqqqqqqvqqq', 
  '1-4 c: cxnc', 
  '5-6 q: qqzhqqzqqqj', 
  '2-3 k: vkkk', 
  '8-9 n: nnmnnnxnnnnnqtwp', 
  '2-3 b: jrbzvcb', 
  '4-5 w: wwlnk', 
  '4-15 d: wdpddddmdddddddddd', 
  '10-14 d: dddqdxfddjbfddd', 
  '5-6 t: pttttmttp', 
  '3-4 b: bbgdbbb', 
  '5-6 b: rgtqbbb', 
  '7-14 b: pwpbbhbvbzxfbbb', 
  '6-10 p: zppvhbpmcpwpprp', 
  '1-15 p: bpfdpppxxmkppppmg', 
  '9-14 w: hmlxdbdcqmxxhw', 
  '1-9 t: zrqqtdbwpqdd', 
  '4-6 n: knrnlnznn', 
  '4-9 l: gclwdmllglblnlzn', 
  '5-7 c: ckccbvvgtlc', 
  '8-11 p: ppppppppxpp', 
  '13-14 w: wwwwwwwwwwwdwh', 
  '17-18 k: kkkkkkkkkkkkkkkkkk', 
  '7-11 c: qccmcnccccc', 
  '2-7 m: vmbnrmmngtqkjlmmt', 
  '9-12 m: mtmmmmmmmxnr', 
  '8-12 j: rjjdjvdjjfhj', 
  '14-16 h: hhlhwhhhhhhhhgbhh', 
  '10-12 w: dxwwwwlwwwwkwlwpwdl', 
  '1-3 w: wmwcwrfbpwtzwf', 
  '1-6 j: bjjjjjjj', 
  '8-13 f: ffffffffffffgf', 
  '1-6 g: lghdgt', 
  '6-8 s: sssslsfb', 
  '16-17 c: cccccccccnmcccmkc', 
  '3-4 z: zmzz', 
  '8-11 c: cccccccdcccc', 
  '8-15 p: lcnvhbjldhfsgwfvtbp', 
  '3-4 q: qqqq', 
  '5-7 b: bcpqbdq', 
  '1-4 t: ttttttttttttdtttt', 
  '3-14 v: cvlrwvzvjkdbdd', 
  '4-8 l: fcdhlwwl', 
  '4-5 m: mmmmpm', 
  '3-4 h: hhqlhl', 
  '5-6 r: mrrrqrr', 
  '4-5 c: cvccc', 
  '11-15 p: pppppppshpjpppszppp', 
  '6-8 j: fjzbjjjjvkjj', 
  '3-7 q: qqsqqqqq', 
  '1-16 p: jpppqppppppvppdwp', 
  '2-5 g: jgwlxzgbhpmqp', 
  '5-6 p: pppppplppp', 
  '7-18 r: wmbbsjrmmzzdlxbwcfhp', 
  '1-4 w: wvwqn', 
  '6-7 p: pppppcmp', 
  '15-16 h: zhhhhhhhhhhhhhhhhh', 
  '2-16 h: hrhhhhlthhwhqjhht', 
  '14-17 k: kkkkkdkkkkxkkskkxkk', 
  '15-16 d: dddddddddddddddf', 
  '2-17 v: vwvvvvvvvvvbvvmvvr', 
  '7-8 v: vvvvvvtd', 
  '1-4 f: lftr', 
  '2-4 h: hhrq', 
  '10-15 s: qsnnssxsvtfssdssss', 
  '16-17 n: nnnnnnnnnnnnnnnnn', 
  '1-4 r: bldfswjgvrsf', 
  '10-11 n: lnxknqwlnnxc', 
  '9-14 k: tjxclnrddxnpmg', 
  '3-10 v: tvvvqmvsvcvsc', 
  '3-4 v: vnxrv', 
  '1-6 k: kkgkdkmj', 
  '3-4 h: jhbrh', 
  '8-9 c: ctczkccknntcccrc', 
  '13-14 t: ttsttdtcttttttj', 
  '1-9 b: bfwjbbxbd', 
  '9-10 m: xmdvtsbmgg', 
  '5-6 w: wwwwww', 
  '2-6 l: djlwlwkl', 
  '5-6 h: hhvjtrkhh', 
  '3-5 b: bsbbl', 
  '5-7 p: vxpwppsppp', 
  '2-4 d: zbnddd', 
  '3-4 s: msjss', 
  '4-7 l: llqllll', 
  '6-18 w: wwwwwwwwwwwwwwwwwlw', 
  '13-14 h: hqnlxqhfwlvhhh', 
  '7-9 p: ppppppcphpp', 
  '5-8 x: bjfxkbqxpzxhxwvxx', 
  '4-5 h: hhhpphgh', 
  '4-5 c: sczcccccc', 
  '4-10 n: nnfnnnsdgnnsj', 
  '5-6 j: jwjjmjj', 
  '1-9 c: hcrlmrcdjwhqn', 
  '3-5 x: xxjxvx', 
  '7-13 x: xxvxxblxxnxxlx', 
  '3-6 w: wwjwwwf', 
  '14-18 m: mnmmmmmmmmmmmmjmmmm', 
  '3-5 t: tslttjqvnb', 
  '1-2 v: sfkvhj', 
  '2-4 c: ccctc', 
  '5-10 r: rrqptljvxtkrwsfdbr', 
  '3-4 q: qbwqngvm', 
  '1-4 t: nttnt', 
  '8-10 f: fqmfrffftv', 
  '6-7 h: hkhhhhhv', 
  '9-17 f: hfzhbmrxsfwfxdffh', 
  '1-10 t: tthttgtgtgttctt', 
  '2-3 b: tlbsbcxzbfplpjlsvncg', 
  '8-16 t: tdtttttpttttttttttt', 
  '8-16 k: jkkmzlkkgvkkkwtj', 
  '13-16 v: vvvvvvvnvvdvhvvw', 
  '7-9 v: vvvvxvhlqvzmc', 
  '4-6 l: gdjscq', 
  '9-17 f: fffffqffsfffffffhff', 
  '4-5 g: ggggb', 
  '2-4 w: wnmh', 
  '7-8 g: ggjgrqfgg', 
  '11-13 k: rrkgxzkkqnljs', 
  '11-15 v: vsvvvqvvvvwvvjcvvv', 
  '13-15 c: ccccccccccccccvccc', 
  '1-6 n: jpmcnjdbdn', 
  '3-4 v: xvlffppmgzwvv', 
  '6-12 j: jjjjjslsjbpj', 
  '10-11 l: lrhljlqllldblll', 
  '8-11 h: hdhghhczmxhhhhhw', 
  '2-3 z: ztnt', 
  '6-8 x: jxxxxqxmm', 
  '2-6 n: nwnnntnnjt', 
  '8-13 z: ztzzzzzbzzzzq', 
  '4-13 v: vxvvvxvmvvvvvvhvv', 
  '11-13 t: ntttftttxtstttwt', 
  '5-6 d: dddznd', 
  '10-15 t: trxttttttbbstttt', 
  '2-4 t: tblp', 
  '8-11 l: xllllllwlldl', 
  '12-13 m: mmsmmmmmmmmvcm', 
  '3-4 t: tthb', 
  '10-12 c: cpsclccmccctccc', 
  '11-12 k: pkkkrkkkkqkfkk', 
  '11-13 v: vvbvvlvvvvvvt', 
  '6-11 p: xkxfdpkkrdpb', 
  '13-14 h: hhqskrdhrhphbb', 
  '2-6 r: rdrrrr', 
  '1-4 p: nppg', 
  '5-6 h: hgpbhh', 
  '4-5 l: mrgzlxlchgjgwrlmvxl', 
  '6-11 b: bbbbbbbbbbbbb', 
  '2-5 s: svsvss', 
  '10-18 j: jjjdjjjjzjfjjjjjbj', 
  '1-14 p: tjphtjfnbhhgrmzdp', 
  '2-4 v: vvvv', 
  '5-7 q: vqvnbqdqhwqxqv', 
  '6-7 m: mmmmmlj', 
  '9-10 g: ggggggggggg', 
  '7-13 n: sqnjnnrnnfnnn', 
  '2-4 f: fbrfkhfkfcgjfp', 
  '2-3 b: wfwjlbx', 
  '16-17 r: rrrrrrrrrdrrrrrrr', 
  '3-7 b: vkksbzbbhpwb', 
  '2-4 m: fmcr', 
  '9-20 v: vfvvxnvvdwhvxvvvqlvj', 
  '6-9 b: jgjrcbnftrlbhp', 
  '4-9 x: hrqtpwzjxxx', 
  '7-9 h: hhhhhxnhdh', 
  '7-8 k: kkkkrtsphkk', 
  '6-7 n: jnnnblnnj', 
  '10-15 d: dddddddddkddddt', 
  '2-8 p: npbdhcgpl', 
  '9-10 x: xqxxxxxzxvx', 
  '5-9 k: khtkkwkkxqm', 
  '1-5 t: stttttttgttttt', 
  '5-13 w: wwhfjkshrwfpnlwjjmq', 
  '4-9 x: rzfrxzcxvxxx', 
  '3-4 g: hgfgg', 
  '2-3 n: nnnn', 
  '11-14 j: jjjjjjjjjjjjjj', 
  '9-10 m: mmmmmmmmmm', 
  '7-8 m: mmmmzmkmjhhwzmmwp', 
  '2-5 r: rrzrr', 
  '3-4 w: vnwpww', 
  '5-9 h: hzhhhhhjgmswvbxfr', 
  '6-10 h: cvhhhlhhhz', 
  '4-5 g: xxgggzg', 
  '1-2 d: dddcf', 
  '5-8 v: vvvvvvvpxv', 
  '7-9 b: bbkbjbpsbbbbtkblmr', 
  '6-8 f: fffffmfgfff', 
  '2-8 f: zfskzfjjwfjsf', 
  '4-5 v: lvdvdvv', 
  '4-5 p: ppbkrjp', 
  '6-14 z: zzzzzrzzzzzzzhzzw', 
  '5-7 g: cbbfngwggzs', 
  '2-4 n: nfpnnhnkpgmjdgc', 
  '11-14 h: hhhqchbhhhwhhhqjjhhn', 
  '5-7 q: qqqqqqq', 
  '2-3 s: sssjs', 
  '11-17 w: wwwxwwwwwwhwwwwwrwww', 
  '12-13 n: nnhtsnxqndxnlnnn', 
  '8-10 j: jjjjjjjhjj', 
  '15-16 z: zzzzzzzzzzzzzzzg', 
  '2-5 j: jfjpk', 
  '1-10 z: mzfzzzzzzpzzz', 
  '13-15 v: vcvvrvdvvvvvvvvvvv', 
  '11-12 j: jljjljqjvjmhjjj', 
  '1-7 c: cctccvv', 
  '6-17 s: slqssbsswsssszswsss', 
  '16-17 s: klksgsgtpsnrpslzs', 
  '12-13 m: mmmmmmmmmxmmfm', 
  '18-20 v: vvvvvvrvvvvvvvvvvlvs', 
  '18-19 d: ddddddddddddddddddv', 
  '4-5 p: srsjp', 
  '2-5 d: czvdk', 
  '5-11 w: pwgbslprbkk', 
  '15-16 b: bbbbbbbbbbjbbbbqnb', 
  '7-8 h: hhhhhwxt', 
  '11-12 g: ggggggggtqggg', 
  '10-11 m: mmmmmmmmmfk', 
  '4-6 m: qvlmmbmmmdrmpcqmmfq', 
  '1-10 r: xrrrrdrrrnrvzrrrrmrr', 
  '5-9 p: pljpvppkgc', 
  '13-14 j: jjjjjjjqjjjjwv', 
  '6-8 g: gggggggqg', 
  '2-7 b: bbkkdwb', 
  '3-16 q: fqqqqlqqqqqqqqqhqqqh', 
  '3-5 x: xfjxv', 
  '1-2 h: hhtkkpvhk', 
  '1-13 d: dddddddddddddddddd', 
  '7-8 x: kxxvngmqxcrqsxxlx', 
  '1-4 m: zvmr', 
  '1-11 n: wnfnnnsnftrnnfn', 
  '6-13 h: gcrjcphhhhpgh', 
  '1-4 h: jghv', 
  '7-10 m: mvtqpjmvvmvgp', 
  '4-7 j: pjjhjjjj', 
  '4-5 c: ccmcc', 
  '1-3 d: ddddd', 
  '2-4 g: gdglgwn', 
  '3-8 z: mbzznvds', 
  '3-11 k: fkjttkdkkqbkkkkr', 
  '5-10 n: nnnnwvnnncnnnnn', 
  '1-5 p: wdnxzn', 
  '2-4 h: phhhhhth', 
  '10-12 p: ppwpwkpgppvppppr', 
  '2-6 r: cdrxrrfrrztbq', 
  '6-15 g: gpjggfgcglqgfggw', 
  '3-4 q: qfqgq', 
  '2-6 m: mmmmmf', 
  '10-11 f: fffffffffff', 
  '5-12 g: bvggjfggkggggrqn', 
  '5-16 q: qbqjqqqxzqqqnqmhqq', 
  '3-5 g: gggggg', 
  '3-6 w: wzpxfbkkwtfdswwq', 
  '6-7 x: xccxxrwfp', 
  '12-13 q: qqqqqqqqqqqqq', 
  '7-12 k: kpkkkktkkkkf', 
  '5-7 f: kjlffrf', 
  '9-12 b: rnlzpmxcbbbbbzb', 
  '7-16 t: tztqtdvrrtgtzjtbtpt', 
  '14-15 g: ghkblgpbgbrtdgg', 
  '6-10 h: hdtqhhhhmlhh', 
  '6-13 g: gggggzgggwggl', 
  '7-9 v: kvtqvdsvvvwvpvgkhfl', 
  '10-12 b: bbbbbbbbbmbtbbbb', 
  '11-18 d: ddbddldhgzpkdcdddwd', 
  '12-13 k: kkklkkkkkkkkkk', 
  '3-4 v: rdvztvgv', 
  '4-9 n: zzjtntjcdlt', 
  '11-14 r: rrrrgrrrrbrrrrrrrrr', 
  '1-4 q: qkvq', 
  '2-9 z: wgpmpmxdz', 
  '13-19 p: pmpqjpppppppjpppppkp', 
  '3-4 s: smxwrsmt', 
  '1-5 m: mmsmhmm', 
  '11-14 p: pptmpppnpppspp', 
  '11-12 c: crcccpccfpcncccc', 
  '17-18 x: xnqxxxxxxxxxxxxxxxxx', 
  '1-2 v: cppsvk', 
  '4-6 p: gnpppg', 
  '2-9 r: krbjwprvrrsmrbrjcfl', 
  '2-12 x: cnqxhvppvzkxc', 
  '1-4 g: bgggg', 
  '3-4 j: jjjj', 
  '4-6 l: lwnlljgsdtl', 
  '1-8 v: vvfhxlcq', 
  '11-17 s: wsssmjsjbfstglsss', 
  '6-10 p: pprkpdpsgvm', 
  '13-15 r: rrqrrrrrrrrrrrrr', 
  '3-4 v: vvvj', 
  '1-10 k: kxprmfhcqkcknpqqggt', 
  '9-10 k: lrkkkkkkxtk', 
  '2-14 r: rrdtrmxjwrxgrv', 
  '8-12 q: qqqqqqqwqqqqq', 
  '4-7 v: vvddhcs', 
  '3-4 h: ghhzsvfkghshhz', 
  '9-12 z: zzwctlnpzlzzzbhz', 
  '14-16 w: wwwwwwwwwwwwwlwlwwww', 
  '11-16 r: frrrrrrrrgrnfrrcdr', 
  '2-3 l: jrlkln', 
  '11-12 w: dhwpwzdpwzkf', 
  '8-12 h: shpthhjhlhhhsd', 
  '4-5 n: nnnnnnnnnnnnn', 
  '5-9 d: dddtqdddm', 
  '2-8 p: kpkhwtptjl', 
  '1-9 k: rhvfjdgmjfckqnbjkxk', 
  '8-12 s: srsfbqgqcjgstkldlzbj', 
  '10-11 x: xkmxbndwvxx', 
  '10-19 k: zksnmwtkdkzkkxnvkjk', 
  '4-5 f: qjnfpsfqqfgmf', 
  '1-9 f: fvfffprxffffsphpfff', 
  '2-9 j: njgjjjbqjnmjxbhj', 
  '2-5 z: zzzxzbfp', 
  '8-15 f: ffffdqflmfffffrfw', 
  '5-15 c: cxmltcccmcmgvjg', 
  '2-3 p: pzqp', 
  '2-8 d: fttcqdzdq', 
  '6-10 p: sgphkqkspxbpfsjd', 
  '5-6 p: pppppf', 
  '5-15 r: rrrgrrrrsrcrrrnr', 
  '11-12 t: ttttttttttlt', 
  '10-11 w: wwwwwwwhxtwwww', 
  '9-10 h: wklhbssjkr', 
  '9-14 j: rjjgjjjfhjjpnbjjjj', 
  '2-3 d: dddd', 
  '6-14 q: qqqqqkqmqqqqqqq', 
  '14-15 w: wwwwwwwwwwlwwxw', 
  '5-9 s: vzssssssn', 
  '13-14 n: nnnnnnnnnnnnxt', 
  '1-9 w: cpwtwvngszwwzpwwcw', 
  '1-2 n: nnnnnn', 
  '7-18 b: bbbbbwbbbbbbbbbbrbb', 
  '4-7 f: pfgfwhw', 
  '7-13 q: qqqqqqsqqqqqhqqqq', 
  '3-10 n: gnpjzgndrntnb', 
  '9-13 q: qlqqqqqqqqrrqpqh', 
  '16-19 m: mrqcmmpmmmmmmmmcqmfm', 
  '5-11 p: fgkdvbqwpsfbpjpprgp', 
  '7-11 q: fqqwdqfkqqqrssqqtp', 
  '5-6 t: trtfkvg', 
  '17-18 h: hhhhhhhhhhhhhhhhhh', 
  '6-18 l: lllllklllllllllllbll', 
  '4-9 q: hqqxqqqql', 
  '1-5 j: jjjjnjjjj', 
  '3-4 g: jxggg', 
  '14-16 j: zljnjjsjjjjjjjjjfjjj', 
  '7-9 m: pmzmmzjmxpcbrqnmmmm', 
  '3-7 z: zlczjzlnrtkfss', 
  '2-15 s: xzswpvgnwwjkzws', 
  '15-16 z: zkzzzzzztzqzzzwzzzz', 
  '6-12 f: fcffffffpfffhx', 
  '9-14 p: kptdgpcvplhjhnppst', 
  '9-11 h: hhhhhhhhhhmhx', 
  '2-3 c: cccc', 
  '8-18 s: sszslksjsrsssssssws', 
  '1-6 h: rgvjlphbbhhhnkzz', 
  '2-7 r: rlzrhrrrk', 
  '17-19 h: hhhhhhhhhhhhhhhhhhhh', 
  '2-4 j: wjzjqj', 
  '5-6 b: bbbvdx', 
  '7-13 k: ztqlwthlsdkrdww', 
  '1-2 m: tmmm', 
  '16-19 d: ddcddddddjdjdddpddd', 
  '2-3 n: tvxj', 
  '13-14 z: zzzzzzzzzzzzpz', 
  '6-7 x: xxxxxxl', 
  '2-3 q: qnrw', 
  '7-10 l: ljlvfhgrmllkhlxlq', 
  '2-4 b: bbbq', 
  '16-17 h: hshhhhhhhmhhhhhckh', 
  '1-6 r: rrkrrr', 
  '14-16 n: nnnnnnnnnnnnnnqnnn', 
  '5-11 h: fhhlhhhhhhjktdhngj', 
  '3-4 g: gzgdvgqgq', 
  '2-4 r: hvrg', 
  '7-11 b: bbgcbbbqbwsbgbbbk', 
  '5-9 m: hfpmxpmvmb', 
  '17-20 v: vvvtvtvvvvvvvvvvqvvb', 
  '1-20 z: pszbttwrmqvlrgkmmlwz', 
  '9-16 h: hhhhhhhhhhhhhbhth', 
  '1-2 n: nhnhh', 
  '1-10 n: wnnnnnnfnrnn', 
  '1-5 k: sjkkk', 
  '1-7 k: lklkkkpkk', 
  '4-6 n: nnnznwn', 
  '14-15 s: sssssssssssssds', 
  '9-14 z: zzzzjzbzzzzzzzz', 
  '16-19 g: ggggfrgzgggggggnggg', 
  '9-13 v: vphvvvvvvjvvvmvv', 
  '2-3 l: lvvxpvvqzhdzrk', 
  '4-7 c: qdhclzccwcbmvcsz', 
  '5-8 s: stsskssws', 
  '3-4 c: kbxp', 
  '2-10 b: dtlqbbsvzbbklbgbf', 
  '8-10 s: smsslsbrsbcvsjsts', 
  '2-4 k: kkkkl', 
  '15-16 x: xxzxfxxrdxxfxpxrxn', 
  '11-18 h: hhnrdhhhhhhhhhhhjxh', 
  '1-2 n: plzvhknwjn', 
  '4-9 w: wwzkwwwwxww', 
  '2-3 l: lllp', 
  '3-9 j: fkzjnhqzpjjd', 
  '4-6 k: skkltk', 
  '3-4 k: klvkkkk', 
  '3-4 k: kkkg', 
  '10-11 d: bqdkzpxnfdd', 
  '12-14 r: rqrrrrrrrrrlfxrr', 
  '2-3 r: znrf', 
  '1-4 j: hgzjjtnw', 
  '1-6 w: mwwtwwww', 
  '14-16 d: spddddtddzjsbdcx', 
  '3-4 x: xxbf', 
  '11-12 r: vrrrkdrsrnhrnrvrr', 
  '1-4 c: clmw', 
  '3-8 t: ztvndgtx', 
  '7-10 z: zzzzzzzzzzzzzv', 
  '4-12 t: tbrthtwtchtt', 
  '1-7 h: hwhqrvhqhfh', 
  '4-7 s: ssfssss', 
  '5-13 s: kjtsspjmzrfxp', 
  '4-7 z: zzzzzzzz', 
  '5-15 h: gvhhrscmwmdhhhghhn', 
  '7-8 r: rrrrrrns', 
  '6-9 r: zrrrrrddr', 
  '7-15 v: vvghgtjwwvzwhrk', 
  '14-17 c: cccccsccccccnbtchc', 
  '2-3 k: kgrgr', 
  '15-17 k: kkkkkkkkkkkkkkvkk', 
  '10-11 f: fffffffffvj', 
  '6-8 r: prdnmrrzg', 
  '3-4 f: kcfx', 
  '4-5 k: kkkkkz', 
  '4-15 t: ztttttqhcpstwtt', 
  '1-6 g: cvgghtg', 
  '9-15 j: jtrxvjtjhjjjsjj', 
  '9-10 f: fffcffffff', 
  '10-11 r: hjflczjkqrq', 
  '3-8 k: jssmkkkbpkkjsvnhwkh', 
  '6-10 g: ngggkggmbggtcgg', 
  '15-16 x: xxxxxxxxxxxcxxjx', 
  '8-9 k: kkkkkkkkn', 
  '7-8 b: rbbbbbxdbb', 
  '2-5 w: wwwdwmkhvd', 
  '1-6 v: hfpwkxgvv', 
  '12-14 z: zzzzzzzzzzzjzz', 
  '14-16 s: ssrsmssssssssssss', 
  '3-6 z: zdmzjkc', 
  '2-4 m: mmbb', 
  '13-18 w: lwwwwwkrwwwwwwwwwksw', 
  '5-6 r: bwjrjgrrrrjbg', 
  '5-9 r: rrxmrrlrrj', 
  '2-4 g: gggk', 
  '5-10 s: ssssgmssrscptfrc', 
  '6-8 q: qqqqqzqqq', 
  '16-17 m: kmmmmmqmxmlpsmmmm', 
  '7-10 t: thxvtttztttjttvtkrcc', 
  '2-4 p: pppp', 
  '4-8 q: njdqbqqqrxd', 
  '2-5 w: gwmwklnkfmwjjggw', 
  '10-16 m: mmmmmmmmmzkmmmmw', 
  '1-2 w: btkxj', 
  '1-3 z: pzphlh', 
  '7-10 j: jjjjrpcpjgjjkz', 
  '3-5 j: jjljjj', 
  '1-5 l: lkzflppcgpll', 
  '4-6 m: mmmmmrm', 
  '2-4 m: vmzmmmdhcmntntlrgqk', 
  '8-9 x: xxwxxxlbxxx', 
  '1-2 s: rwrbhvt', 
  '1-5 d: dfdhdd', 
  '6-7 z: zzzzzfz', 
  '12-14 v: vvvdlvqvvnvkkm', 
  '2-7 s: skftlhmfdgpsp', 
  '9-11 q: rlqcqvqqqqqqqqq', 
  '5-6 g: ggmgwtg', 
  '5-7 m: mmmmmmmmmmmmmm', 
  '4-12 f: qffmdmffzfdff', 
  '8-10 k: lkwlkvkkkkkkkkkqk', 
  '15-17 p: qppppqppppppppzpv', 
  '3-4 x: xxxxx', 
  '7-8 x: xxqxdxxxxx', 
  '6-10 b: bbbbmsnkfbdrbnbtlnvb', 
  '3-16 d: ddmdddddrddddddp', 
  '8-11 n: nnnnnnnmnjdd', 
  '3-4 v: vvgd', 
  '11-13 n: nnnnnnnnnnfnn', 
  '5-10 n: nnnnpjnngcnqnn', 
  '7-11 w: wtwbbtzswqt', 
  '1-6 f: fffffwfff', 
  '8-10 q: qqvqqqqqqq', 
  '2-3 h: hhhh', 
  '17-18 m: mmmmmmmmmmmmmmmmqmmm', 
  '10-11 f: ffffffffffdff', 
  '2-4 z: zzzz', 
  '5-6 g: gggghz', 
  '6-19 n: nnnnnqnnnnnxnvnknnnn', 
  '2-6 h: rhhdbk', 
  '2-5 w: fnkwgww', 
  '4-5 c: cqcdgtmcccrbcckng', 
  '1-12 h: hkwptjwxmmgfhbvgj', 
  '4-5 g: pbhtb', 
  '1-11 h: hhhhhhhhhhhhh', 
  '5-11 v: gfrfvfqmgsnrtqkvq', 
  '13-14 s: sstssssscssdssss', 
  '3-8 b: tzjqgnkbbzzvrsb', 
  '8-9 b: bbbbbbbvb', 
  '7-13 r: rrhdcvrrtxmrzrmfxr', 
  '3-6 s: lsshsk', 
  '2-6 g: rqzpqtxmbggsgg', 
  '4-5 b: lbbffb', 
  '3-4 m: kmpm', 
  '8-18 w: wwwwhwwhwwwwmwwpbdw', 
  '6-7 n: nnnnnjn', 
  '6-9 r: ggrrsqrrrqrhbmrqzgd', 
  '7-9 g: rggggggzc', 
  '1-8 n: nnltwnnwn', 
  '6-8 r: rrrrrpxvr', 
  '4-12 c: ccccccccccchcccc', 
  '1-3 g: mrbgf', 
  '6-12 p: zfpsppknppvpmlrspbn', 
  '1-4 g: jxmmns', 
  '1-11 q: zdzhtqsxkcrklwk', 
  '2-4 x: svqmxxl', 
  '7-8 l: lllrwllll', 
  '9-18 v: zkhlxtqvvcvndkzkvvt', 
  '2-9 f: fksffshzx', 
  '2-5 j: jkjnj', 
  '4-15 j: qjjjmvjjpvmjjjbj', 
  '1-5 p: kpppx', 
  '1-6 v: vjttbvffvdhvk', 
  '4-17 l: wlsqvxkrjlltlnxnmds', 
  '1-3 p: pdzqnp', 
  '1-3 h: hhhh', 
  '2-14 z: mmvzzvzzkzhzszvqzzf', 
  '3-6 q: qqrjsxqqq', 
  '3-5 h: hrhvr', 
  '1-8 k: kkskktnkklzdkjgk', 
  '17-18 p: ppppvpppqppppmpppxpp', 
  '2-8 f: fffjsfbp', 
  '9-10 v: vvvfvvvtvxltsvv', 
  '6-12 j: jpvptjqpkjwjr', 
  '15-16 v: vvvvvvvvvvvvvvvp', 
  '6-8 q: qqpqbqqvqq', 
  '10-12 n: nnnnnnnnnnnjn', 
  '13-14 n: nnnnnnwnnnnnxgnn', 
  '2-3 k: kkkxl', 
  '2-3 w: ldmm', 
  '14-19 m: fphmmmmmmkmmmbmdmmw', 
  '4-7 w: wwwgjwww', 
  '8-9 d: dddwdddddd', 
  '6-7 w: wwwfwfvtw', 
  '2-6 j: hlcpkj', 
  '1-3 m: xsmmc', 
  '1-9 b: bbbbbbbbbbb', 
  '1-4 z: zsgz', 
  '2-12 v: vpvvvvvvvvvmvv', 
  '2-16 c: vccjrtcckcccckcsc', 
  '4-15 d: cqxpptqpwmqbvsvvt', 
  '2-14 q: qqqfqwpqzqsmqqvqrxjr', 
  '9-10 w: wvkfhfkhwjvw', 
  '6-10 q: tqqmqktxqfvq', 
  '4-11 f: kvqlfqxfrsf', 
  '7-14 m: rmxmmmmmmmmmmmmxmm', 
  '18-19 v: vvvvvvvsvvvvvvvvvvvv', 
  '7-8 x: fxnxxjjx', 
  '5-6 d: dzddrd', 
  '9-11 b: bbbbbrbssqtbb', 
  '14-16 x: sxxxlxxxxxsxxxxxxxx', 
  '5-9 t: wtttttbptttttqttmtt', 
  '11-13 l: lllllflllwsll', 
  '7-8 r: rrrmprjcv', 
  '6-9 p: plvpdzzppptpkpkpgp', 
  '2-13 g: chmjgvkvsplztzvtlzl', 
  '6-8 z: czzzzjzkg', 
  '1-5 l: jlltpfwlrl', 
  '6-7 d: jddcggqmdddd', 
  '3-5 c: cxbbc', 
  '13-14 p: ppqpppppppppbs', 
  '3-7 w: rwwnqlw', 
  '4-5 v: vvvvv', 
  '9-10 v: vvvvvvvvvm', 
  '3-5 z: zmxzlz', 
  '7-8 c: cccccchdc', 
  '2-4 d: drddctmgd', 
  '3-4 n: nnnn', 
  '3-10 q: cbqszqfqqqbvrrtsfq', 
  '4-17 p: pppkppppppppppppwp', 
  '11-12 n: nnnnnnnnnnnn', 
  '14-15 d: dddddddddddddxn', 
  '6-11 k: gbmbzkcmzskpkhp', 
  '2-10 z: zrzzzzzzzjzzz', 
  '1-2 q: wvqq', 
  '11-14 d: ddddddddddhddn', 
  '2-7 h: hhhhhhhhxh', 
  '10-19 m: mmkmmmmdmmmmmqhvpldm', 
  '2-10 j: jbmjjjrcjj', 
  '7-9 c: ccccplccccc', 
  '7-19 c: cckcbwlcccccccccczp', 
  '9-13 z: zzzzzzjmzzzzp', 
  '16-20 j: vjkjjcjjrjjmtnbjjjnj'
];

console.log(validPasswords(puzzleInput));
// 255

console.log(validPasswords(sampleInput));
// 0
