'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2f1215c84c69af06b70f2af60ea2e061",
".git/config": "d29ac39d36a3d8275733ea7242621345",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dcbd8dcc731c4e7c1fe6b6453a8d27f1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2fed374d7b2a58c621b4fafcfa6f09d1",
".git/logs/refs/heads/main": "9a4e67040480265abc407c290a7fd736",
".git/logs/refs/remotes/origin/main": "e60ae493c4961c703cef8635e20ae4df",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/226bc0246dc65370e2e4d19e8644328a4ab9ac": "cf69ea732325dfb36f8a421dec60b0e4",
".git/objects/07/93a3fca568d8bfc611024d0e9ea888359579b0": "230a65e6e313e30784b76abe22f3b287",
".git/objects/08/e8320cc2d056a1a0e0f4ead425ffdfac98b842": "7e7cd55f4dd4fe44193de126d5c16764",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0c/a63bd220b9678c85258b1a35b336eebe19d32e": "121dddddcabdb215338a64ca99071f44",
".git/objects/0d/bff57e869eb34067505f3a1ace21b51a8de716": "6da5316ce6c828397d5295cdeb647798",
".git/objects/10/6a180ef9d9d5edc523fd93b632af31db1ec505": "06d344cd8bb67f22097944e6a702febe",
".git/objects/12/0582bb343b619ebe236afd61491a06a3483a5e": "f899cf55a6183208ee266f830eaf27d8",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/f4a654d28667d2d93326d01c87508fbbfd168f": "bd1e1907c59d3aac32bf4db6a68d17f0",
".git/objects/23/ca4573dfd2655cf537385b07acee6bd298c72a": "352163ce701de4f0e17f1221acf554d7",
".git/objects/23/cc351da2e6c15a58cd7233a4e28e60fb67332c": "b2a3fa64cc469f830dac36d38e707dd8",
".git/objects/27/0241316bb6bae446987ddb18621c0073a221c5": "1af80a445a0df5146f29a4b6af4e7949",
".git/objects/2a/c67ddad51acb55e10010525c624c9c1912adc0": "a175d6c3d43e8589756c6ba87e4c698f",
".git/objects/2f/be135dd079c7f49c655c6f37bba1b7ba8e7e15": "3986856d7a3d97176d738a62950e9a4e",
".git/objects/32/c913e19f3b1740f2b8e981a4564fa75d82510e": "f6c19a19ee092c25cf80b5a94aab1a00",
".git/objects/34/b42a555e9269defda20a66f087fbeeb67c9ec5": "c0b17fdaefec134675a4934115166965",
".git/objects/36/4421646f6ab5279b6fd0398c9bccac24e0cbf3": "7c4161b05c8d890c150a5186adb200b6",
".git/objects/38/c220cb2a360cbd66792ed65cbe81bbb2d93740": "de909febf3d5afc07cc69d59bd84e964",
".git/objects/38/f58f92dd819454559c0471939b21391261c2f2": "6bddfd7d4071764850da7ac11ce28193",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3e/49f434a3c638b1b2731fab86b483226a240834": "509036b53173cdbb8cc16b506dc65587",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/40/d3ef8c63d66390e64e9e0204ad1a22ec557c95": "3a98bcd8cd8047398ffab92cc9611d54",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/8bf61596f1a5b598922460a1663edac4006189": "2e0c466b326be01f036791a25167c31d",
".git/objects/45/eac351d5371ced4fa03b56568c0e9550d5cba9": "d232346e11e19a4fe990b2ab4c4c69e3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/f41441986cca15e0f2d298a7e5b49cc2be7c5b": "a1208643ab62c910b5c133e19dfe9e76",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4b/9bfddba6713c186338b0fce0f5727eae3aedf8": "251a910897970e479bf6a1ce41226e24",
".git/objects/4e/a4cc61bcf100943cc49d59b32c902c2a270e4e": "760bd99e67f166e496e50429df957edd",
".git/objects/4f/4317d56469f9268bfd9cea174d3a30cabb6133": "847afc05d1985ae2ee136422e20fe8a4",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/aeee7c37a359cee5c59db9188f55453e15c601": "dddb9c9113c12ba999a5d383efc4c205",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/06fe02c69db5eddc05bb868d3d381df255b90f": "9cd1e831d994c0b39b88fec3c3489db0",
".git/objects/58/e917b78fb4fadec97ebe60e3ff852c2fd344dc": "a921ba94671357ac542c761d47423e8e",
".git/objects/59/bc14bf82c3457156e99abde5a02c9ab35f6afa": "9fb0197829f5093edaada51ce2e6f3cc",
".git/objects/59/e7c2c7728f05a9ce4bbbc88d38d9b0146c171b": "1ecb5cf5889d64525bb4133ff5fe71ae",
".git/objects/5a/6becf830516ea7fb4074706266b0f8f8bd8b61": "3efd47824c65739a6c14e7c64402534d",
".git/objects/5a/be73efc9bdb3c15dc24722d6625896740b14de": "f688c192f93f0302c7c609092147ca31",
".git/objects/5a/f6250273b312299b9fd666c5742abe3fecf079": "c6d0cc5b40422d1e2329c7718e32a1b2",
".git/objects/63/02fe5bc90d8d6ec61e40f2a181ee73974183cc": "f6edb6dfe75d0ee3e7f1ddb0d4f5c340",
".git/objects/63/d29cb4ca71048f1ccc1e8c30097d27ccaac579": "619c9c44e6e5fde2e2ea56968d758c08",
".git/objects/67/02dffa1b3dc30898e0e167ada6d9c2ad3ba275": "fc63593d7961dcfc649ec2c13833fb4a",
".git/objects/69/7bb087bac3774c61475ccb47706d3846456563": "a5dbd4f37c4ba8183b873bcb3c5ddc9e",
".git/objects/6b/5b44f7fa3a5ca799fc50a33bee767dcb043193": "3bfc7a1fddb131262121628de86f3630",
".git/objects/6e/98ea396bae42b9747c962fb30afcf455794b7b": "d2a1192768245dc65374b839ce363482",
".git/objects/6f/61ba31999b4bf58c57550eab10deff6b7bfd01": "66d6beb2a3c3ed6563c91e53829607d6",
".git/objects/71/4b12e3ecf15a5739d7c0075633ade42b32aab5": "b756eb46d3ab2a12ab92ff68949835c5",
".git/objects/71/c863e52840a2798d4ebcc5de1b834b45277e80": "daab73d744b86de2ffa347b1e65bf0b7",
".git/objects/75/c07bada47af39bc74779a2f7231b714fbd7adf": "d392945209aba1b9eac423a2c36119c3",
".git/objects/76/e2993575fdb908b2958def5aea580c3fe10fde": "c95d01e41a6f79ba2fd15caf76a17a80",
".git/objects/7b/079467c658cf5bab7db894715cab0d4086bb0b": "9090846e2419d5c4d13f76d5b6c4fe27",
".git/objects/7c/bf25122805e3515ccf446d2ca82b99b5d3d169": "b67035c70ccebda5b95c7affa4f58253",
".git/objects/7e/c2fe6da9e5c282647358534376ebb4c9301da1": "2b13105506534e4c81fd2899131d97c8",
".git/objects/83/b49ae89c96149e32cd8e4e5c1b4662e1b0216a": "0b51f1ae78d452691b94de2bf3b4eadb",
".git/objects/87/f1fb9976246699b204e73fd4d655e366fd1109": "f7860bc49eba92957b45aa3d6aa4e719",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8d/928778eebfeb14d273b86357fb08af353c4088": "2dbb346d6c61053049b96fc0a55e7e3d",
".git/objects/8f/3727575e4511a437dd5cd8400c811cacc2a65f": "2e32cc903cef0f79639d3595a449f474",
".git/objects/92/f263997b1f02694b5e7eaf75fa74432fb0a886": "2d774d4d65e0f79932a35c55387fa8f9",
".git/objects/96/9124f69edb595b03958ad47d8e4f13619e1bac": "b200b3cd909a1d3183f4ebe84349ca05",
".git/objects/a2/9196d44e38cddb250876b124263d4dae31f15e": "7ef27627d6cf1a3f45117cf7591657d7",
".git/objects/a4/b4a8c3a4361bcf2ebf5b302a3721580675b5f0": "8d25b9f2e16ae11217e604abc2114c86",
".git/objects/a9/5d045adddb5c9190bbb47e1385e35e002559a2": "531d47501c25e18853520d0c4d3592e5",
".git/objects/ad/0685eaf5e2296ed8f62132745b9d8148451cbd": "6ec2f66273700e39b34dbb90b04e99b6",
".git/objects/b1/cd5c43d0f68fea8abea9e16b6eea36168d0e90": "e3f1ec9376ffd5b9f9fc04f24baff49f",
".git/objects/b1/db89575862e5157a4f8e4f3450cbd38ca6e866": "a38583532824b85c03f4b48ee0529a63",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/425ad0f45127dc73c502ac326fb9b9b587fede": "74b7ddebac037eee868aa7f79140d6d8",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c2/e93fcb91db19720969198abbde3e807ca6cefd": "22a112e8f02e6bddf5209d3d22a93565",
".git/objects/c3/fd9347460e6eaaf027b0216ed696f9de1bf05e": "986a3d0ffea6537a6834be4dc7c25e51",
".git/objects/c4/0020014f068795e5852cd1a1b746e973403d2e": "34473a1d08d368bd3e640a90c0109c45",
".git/objects/c6/21756ea7d2437057560f7267e95b62487418ac": "e92a860b1884e33e4e7406590cd021de",
".git/objects/ca/5d42f27ace600ce6a23b4607a4e9c03e343b45": "993fadf22555a21d4456486f42678179",
".git/objects/cb/9a4339df1e2e937974a4627a2c304f62093aa5": "5045a8fc36cb6076ac72bfac02257380",
".git/objects/cc/43b2a6d0d38c2330366d7349f9665ea8b2f577": "aabcb50f7f799fb10b42b5e284ef8189",
".git/objects/ce/03805e0502c675b8bd8f544097ce6a783d30a9": "34a5091e6e6a52ea09343db6bc99df5b",
".git/objects/cf/452ba280cfdd637d26c95b5c9d0184f1768bd0": "a9b3027536e039757f7a2929c678a8d0",
".git/objects/d5/1468047c9100e521376a55f2c5fbd0c59af75c": "d11dba45323b8f2d2a78ef99717d8547",
".git/objects/d6/0cfcb2284b60cb28486c292a4f71c05533ffd6": "f5aa6a449ef1cf7833625f781b245a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/f0c0b70dffef89ded0e211de3c0a54f15d12f7": "3cf1bbc8ff6d9e203086a0825f56e034",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/c115cdc39159c99a450b4df5b4f9238d700ba8": "eafb7c6cbc19bed893aa08abee209fa0",
".git/objects/da/f8d1a1ef9acb788f62bd2b0f7160f3100c07aa": "69016e0fd2219593075332a95103a23b",
".git/objects/db/8ada36142e9a9519aad754f642898a27107cd2": "327c79c7a84be6e5bb5607c05209e2b5",
".git/objects/dc/d2febd125ed14bf13710d3b7d0d174214e3ed9": "b9b8b51f96fc13385bf6b5f0fa9174a8",
".git/objects/df/315dc29bed3044721869635396599c1524a511": "e121b4df30042d1a2239dd7474a1aca2",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/93812ec1d7821a6ef08d2bb18a38142797609c": "ffed8963c7970999ebd26974c0eeb7e0",
".git/objects/e1/af7f5b07839963a26e2b0f20245021a6a593f3": "89f345c81da8fa12963f1f35d3c7e86b",
".git/objects/e3/b1c9b0800e54bb64c604bd3aa5939b59f6cde6": "533c62762369b6104e92da04ed2dd25e",
".git/objects/e4/74992fc13a35ca8d96b17d14e5b9cdc9861240": "5cf7cd74e179b878fa6c21c73700c8a1",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/3733176224b60c383a21452094a4f5c7424688": "86b3090cf9aba132ce244549b772ff1b",
".git/objects/e7/4870d90867a2a8fc7bc42122400226f073fba0": "43ed04487ba54f3a73a9934201698949",
".git/objects/e7/ecd10e6714cc1997d7b59d8ab62d9ecf6f06c8": "93a26dbdf05d52ec3b8bc4b93111bd2b",
".git/objects/e8/58574ddf8a6d9257b2642f9f7643f9dc0a495f": "b467b1360962fcda69e0ec08c53c7aa6",
".git/objects/e9/69be2a314b19d6dd4e30836d120bf417de2fc1": "efd64993721dc057a6615e984d7e94e2",
".git/objects/ea/39ee7d222c970b2c665c12a6af19410f1e8f44": "346ecea353e695711609b621c09ca150",
".git/objects/eb/022b04eea40856212e750c7640e3bff4fcb140": "48606d99b4ca0ccbb12a3406b61c259e",
".git/objects/eb/5085716f3ef436acd2f8a297bf21cf6eb88f7a": "df9def24e866717c8050393f8a109f27",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/13dc24239955a35b73e91939417b46f8dfa4eb": "32e80558f8eb3c9f45a5b20c598082c1",
".git/objects/f1/dd39680a27a6516af8370e4663836a1ba73b30": "d076d404f90bec8f74ff857239e299d9",
".git/objects/f3/8d7cef0cb9323f9e74dec12ed4ad97356375e4": "4907f1de85e85a82ebaea31c08f72ac4",
".git/objects/f4/2f16667a89ae4a879e22767fe5b940e84c9187": "7b8b95bf625bc355eb2e8886ce5fd18b",
".git/objects/f6/68c637969ffb5e7ade407749c3b7c6747978c2": "7df472ad81e0814bd1e977121485f2c7",
".git/objects/f7/1d92ff9cdd7c099fea713ad433658fbbcc7a2e": "0cfa01ffa0f81ef0c924f330e44bf5f6",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/ff/4365bab461cb5dca9a2b34a654a56c72b370ad": "558a89ade5b34de65a160812ffeae17c",
".git/refs/heads/main": "0f7af67922fa90075ecac7a4a7680bcd",
".git/refs/remotes/origin/main": "0f7af67922fa90075ecac7a4a7680bcd",
"assets/AssetManifest.bin": "e171953ced31a0f2d56bb2f51cfe5183",
"assets/AssetManifest.bin.json": "df85cca477c2e3381e0ae74f9dc6e072",
"assets/AssetManifest.json": "cc8a2c47810004a7f94878d541dc1d1d",
"assets/assets/anims/wave_hand.json": "003f2acee2db3b32e8e6a5027f63d28a",
"assets/assets/icons/android.png": "f3f62505de0766a4e362c7cb5df84bfb",
"assets/assets/icons/apple.png": "b449a795561361c23f74909c8bd572b6",
"assets/assets/icons/c_plus.png": "e4f46516b8d0d4b45f958b7e404f2d55",
"assets/assets/icons/dart.png": "833c6dcaff1c86adaea0230470dea567",
"assets/assets/icons/facebook.png": "01710b5fcb0658fc5a81dd19cf2397f6",
"assets/assets/icons/figma.png": "ac00fa7b6768286ad44283e4595dd07e",
"assets/assets/icons/firebase.png": "9ad79828751ede5dbe9f92f97237bdf2",
"assets/assets/icons/flutter.png": "9c762fd9bbcd0a09a78da1814a4860d6",
"assets/assets/icons/git.png": "2fb3f38b185dc46158e3c53d5ec6f5cf",
"assets/assets/icons/github.png": "a29dc3691124638b000809a7696281d5",
"assets/assets/icons/java.png": "1e1ba20cfa4a4c86d66437632e35df2f",
"assets/assets/icons/leetcode.png": "104f036ba7589d6b7638ff349eed6a82",
"assets/assets/icons/linkedin.png": "1a9291b12d642cb2fa8aa8fbef5c7be1",
"assets/assets/icons/mysql.png": "a41f2061186139958ff5624173c3594a",
"assets/assets/icons/postgresql.png": "63be18c00f238b5c24a2bec2177e3162",
"assets/assets/icons/python.png": "6606c48fbf49fc629449aa11170b8c1c",
"assets/assets/icons/socket_io.png": "b32302bc7bfc3c04dac80ee9c5975e11",
"assets/assets/icons/stackoverflow.png": "2b9b43957c38aff5fbb133ea55a42c04",
"assets/assets/images/app_logo.png": "eb5ab5b6449bb837aad2f3277b5f484d",
"assets/assets/images/bdCalling.jpg": "32e516f86b7f54f25dfbf014f47f17dd",
"assets/assets/images/my_image.jpg": "359eedb3d3928888be0a6fbc9a51ac2e",
"assets/assets/images/opus.jpg": "3b0d0fdbf30292003751b9b42408bb99",
"assets/assets/images/piyash.png": "57a054511473f20df337ff623c684e3b",
"assets/assets/images/thesoftking.jpg": "67cc6ffc8518c4ca76d127c1035d1073",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "84b830ecdf606a51bcdeea359e420c7d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "eb5ab5b6449bb837aad2f3277b5f484d",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7529ae65f6f8441edda75763b8d41622",
"/": "7529ae65f6f8441edda75763b8d41622",
"main.dart.js": "c698c25f3ea3a28b8b5726bd53ddeb9f",
"manifest.json": "abf9538dfbacb0c2abb07ddae9499df5",
"version.json": "8a9ece9a3b8cc99ab6517820052096b5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
