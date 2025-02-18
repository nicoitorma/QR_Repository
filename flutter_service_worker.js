'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f6b16fece3f67527071eaba07f69a51b",
"index.html": "47541d2111e0feb9c77b903afe8c1625",
"/": "47541d2111e0feb9c77b903afe8c1625",
"CNAME": "e0cc2bacebac0e694eb06f04af286ed9",
"main.dart.js": "8db98dd461d41892dc97a33863d12253",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"README.md": "8c701e96a9c0cf3d007eb02161729fbe",
"favicon.png": "21c6ca4493a5806f66f5572cd9705170",
"icons/Icon-192.png": "1024f237df000e3e0d40eee6a348c445",
"icons/Icon-maskable-192.png": "1024f237df000e3e0d40eee6a348c445",
"icons/Icon-maskable-512.png": "586ef59946980352a0674bb9efdad393",
"icons/Icon-512.png": "586ef59946980352a0674bb9efdad393",
"manifest.json": "af64ea5cf241e44bc36099d849c87762",
".git/ORIG_HEAD": "f9cfb7d2a0d60673310e03ab193bcc05",
".git/config": "95d88809309c0772d067d2262f90a82a",
".git/objects/66/a660c4fec16fb5478157c9d8232ce886ddaed7": "97cb27f231a545e9d0a75768683000ce",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9e/99e6ee3456451e9782b8cd10ddef244c6318d7": "c63e39092c8be466ce322f2a69b91033",
".git/objects/6a/77f41634892ce47b0027ac12cc4e6e4ee02073": "d70ac68a0f87b86594b24348cd9d0bb8",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/0d855257dae900521cb1aeb7944f7f4c1b9e5e": "298ce741e52f6bbd406d727e003f2357",
".git/objects/3c/cda1d26bc75648ef3bb50ee16837e8b3f46caa": "adaeb67e6a83ec3c8d9aea48f7fc3977",
".git/objects/56/9daedfdbb3ac6568e76d3644ee14fe1918741d": "b5006c9e996a9bac5027dceb06320238",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/aeb8ed0c2a2d8116482675f7cc977ddae06c1e": "2763d91ad7eaf22992f41f937a566317",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/60/6d5a310ffb39bd10c185d7e65c619000fa82d7": "e6f6b9b126fda64fa9381e23a208edfa",
".git/objects/60/bf91f0c8aa0b4f188f65a3df218b674d1d5c23": "04a5bb27e825f7fdc13dbdd76765330d",
".git/objects/34/708b3e2152e78f32abfe4696c3a5b9015bda74": "d3ce747227e4a343b1d17547ef598ac6",
".git/objects/05/04f8fc894af4eb4767852f0b7ba8f08d898658": "bd46c2920128ecf428ba088b18beca79",
".git/objects/9c/a17fb2fb129ef8bae4642e7e6ff17f80f3257b": "349d592a1df26d23bd298db371418379",
".git/objects/a3/48b2bbfdcf655110e56e40e3ffa750abd2b453": "00bfbb7bbc33effb8a709b15624be8a6",
".git/objects/b5/67652256e01f53c3021d7949f0008c348567da": "708cbf86f9af42d9ae66ea5331b915d2",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/7dfcffb73ffd5877646cf8121eac9a15b221f4": "e570cc5101525d5859e9bf12dac3d581",
".git/objects/ac/d94130bd1f6e36c671409d26e1789eb7051d73": "b4568c653f83dce7c21bac48dced2927",
".git/objects/ac/7c207e0171ca0f6bf3de136cdc73f78a3547d9": "e39a543f31244b96fa95c9bb0feb4c8f",
".git/objects/ac/39f734debc1205b70da8fcb148c59cfc50383d": "844d7dfd6094e23b1a54e8621d55d337",
".git/objects/ad/76e9c5e7b970a9268858ac9745229cd41e832e": "50fcd4f7d3ae29f2fa00a0e786789a7b",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/899766e7b54b10ebd5a3084388aca1b79fffe7": "c26f6c52354889a1bbd3362c2560eeb2",
".git/objects/bd/33b7fe662ad7f1bf117383cbe49c2f96552e73": "554cb6160e832bd10e651587ceeec5cc",
".git/objects/bd/2098522be94267d95e5275db9dc60c24a7683d": "3a17a6d4c2cdc2358cc180686fffc5f2",
".git/objects/d1/51e4dc8f8ddd284571fcf3147d2506ea531daf": "0274c247b7958c0835aa6c81c5c7090a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/d5831085dc6b18ab40122966c2f3c8d9da82dd": "9f44ffdf58010a083ce9af8a659f77a3",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/3af2db24f48e65cbf4fb34ddb2880a027d0fb0": "29d70942bbdf9933e88d9122152ae118",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/aa7a13dc06a00d6403fd4442dbdc3a12e64eb9": "709b75dbadfef3376bac33e2632234cd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/7037820826f56f03f1b55a65422fa3c543cf5e": "55c9a8bd9beaa8f8e6c18152b0204dcd",
".git/objects/eb/20d4e4973af35447c761c32089171876f5a496": "a19b87f7b50e82b36dc6b75cd11666a7",
".git/objects/c7/a91ec1a83fd0d6d1a5a07740c97d66787fa22f": "e84eb2e052e08b783cfcbecbf67e5437",
".git/objects/c0/c8509e0fb83757cae5cc503d2adee526ad4491": "d88b9da857ef072ec4118c727c1a5dfc",
".git/objects/fd/6e5459e9c9738234a5ce5a845045ee9aeed380": "2e2107f810bc797336dcc56db8443f2a",
".git/objects/e4/54a2ac29d4d6ca4dad63287c51459e0fcf0ad2": "015d7999b49fe4a1d3d572ec1159991f",
".git/objects/e4/20deb4bb47654ce142b836fd02e51848fdc54c": "d59fb6a8b2555b6785dd70cb4cba9845",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/18/8d7ddd3268d90660b37601ec3e0aae881e90af": "700fce8f2fe7e039da4c23b3599d3fcb",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/29/b8f469918d00e5f9bc186dc2a751994db557f9": "615e494c6cf955e468d5d33b11877bf2",
".git/objects/29/ae78087aab42c58871ea7da1bf964e10adb3ae": "1ab504745e676db1f414bbb41d307006",
".git/objects/7c/a007ed5595b3f5e44be2ce2c70ab42eda6eaca": "91f94654532d175060279a52059249ec",
".git/objects/16/db2613e49234c019bd62557885d5db41e41b3e": "1dc07d9a60c89281e8b8d434714af2f6",
".git/objects/42/658824fb4e8beb22d9185d4bf83263f8f14d4a": "0994d3b465fc419e62517129c5610f58",
".git/objects/45/b6a54146240538d594e98e0cae60fdf2ec5a10": "995a8306368f388999c88791fa94d1d5",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/80/fa9a240bd7e383744ad0ec1c53b1fc1a8491a4": "ee12efd9165de56ecc2c7e57df1d2838",
".git/objects/28/e617047e0e629a3b6c4d655ca3b1955f869062": "ac18cb51992f8d3ceb6386f39cd32f70",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/19/3a338fce154b4ddb828c58d85ef8b027a611e4": "e05c5ff58357d87b0ccbcda86d2b8435",
".git/objects/19/1f5397e7d3e142ace737b4c67fe00c4ea6cc42": "e447ebfa95af3a5bbc3dd0ba2a4afc51",
".git/objects/19/c2c028695a81216528473dfd6316f6da16fa35": "7ddc9ba4172a370e6122c8a8b8029ede",
".git/objects/4c/43449a19055060bdf3e9403e628f8e2a116f2d": "ca4d3bfb01a29ef71189c995073c4103",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/4d/c0edfbc9e72ab89af9cc116f70c15bfc7fc559": "9e5c0308265a2f7f9311d27dcb9d1fb0",
".git/objects/44/4e0debeef353ed3d67c8b3f4cab0fde8947ec3": "ea1d88b6838dfccf8832cb78a9019e6a",
".git/objects/2f/1befd30f07f48fcf83bbbd01c7b9d5030a0f6a": "2b481101aa296f8610b8f0b87d3b787e",
".git/objects/2f/e0e0e1d719db6693576bd9388e78d1f5b33051": "980ebccb9020c82dd5e1ccb19691d768",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/49c5b006a92959384aa19f54aa2c934104093f": "ad1d186d2f08861a91e47fdbf01aa3e6",
".git/objects/5c/10745d859e0a2df743490529b781f43cda4650": "1d66e85a20fb3516df127589ededb054",
".git/objects/09/20bed369f6424d046a2a0c48fa5887bd2516f9": "ee3970956b1248aabb94213963c054b6",
".git/objects/91/746194594ed129b8709b268a172870447035b3": "23b0653d80477afb040840e793eabd26",
".git/objects/65/dacc36888344c88f9213bf19c0d487f7011dac": "358fb146418bd576a8dffc582827f9e8",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/30/cd708c62d8e7664b37523f9b9da2b03882bb3a": "02b9c35058085ce88572bae7ce0aa18a",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/7a9d89b43f8a9857cb6393b037b88b17cded7b": "d55b8150eae4d33b7534a4760a8a4178",
".git/objects/90/912e9b0fb3812e90dd0ca35ad812af2c95eb52": "096085c59670dfa53cab07f707e28af4",
".git/objects/d3/2b44b9dbeccc555f4513dec6f2a53545ada408": "1b8ef38f8c92f437da7353d32983e3ca",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a0/da01de5b1999726fb55d32d362b0cf8040de62": "0cf8510c248b49bf1cefc2bd467d081d",
".git/objects/b8/729f64359a58f3e0628eccb14fcefb1c3c2a1b": "521264e7d6de7ff3e9836bf04ebe28df",
".git/objects/b6/db7500aca90e2ddb261c1ed7bbc6f6f34c02af": "b9326f95a463613a9739dfec249427b7",
".git/objects/af/92d2c96344c3b6c725775a070bf33c5e25cb6b": "04a8ff347e1c950bdb50edc48d3b2341",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/21c84158b1ac738552b8736dce94624ca5ef20": "11ab6d0745b76bab926849d45a15b027",
".git/objects/a8/267a293fb200664f7c324df05119aea3b93a45": "bba557ff5090dd312a2db6037db3859a",
".git/objects/de/323290bf5cd677cb7042d7d627ca8122651e4b": "e3e4a40f7b54bf91a3cbebb4d544c718",
".git/objects/de/0209b35d038b41df857ebfddb868e019b1dd5c": "0a9f1e9831b17b9d9f3baafe31eed19f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/5bacbc67318b9949103e5a2a9bea4824eca23e": "64ab964794c18bd25365d7a99220799a",
".git/objects/e6/16e55c43652c481daa904af00218c70e713df6": "1e0b1328acb044cd78ff123db7c9023c",
".git/objects/f0/3df5c4955605f44d2e087f696ee3d8c107d7ee": "a92d326a08db7f69092ae26000490606",
".git/objects/f7/5f0165f9446f60b39d33584ea0e8a17d0f2d15": "a46e313fde1b71cb838ff8eb34aa1dce",
".git/objects/e8/e3fbcfb5cbf763f204d6848aa54e692eabe94a": "fab11cc795b8807e4e8f95ab14f1032d",
".git/objects/e7/ef6eadbe2b7446718fb634ef84705a1d470e0f": "d5670e16cc04e6262072a87e2910377f",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/f8/9c98bd9c1abccd9626aa9e42977471f208eeb7": "2dbad071946baf62e3ddcf5e48c3614e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/caf600d122f7fb8c6d0ed8b3504af665c1858d": "4fae0ee780cabfb9de59046676564d52",
".git/objects/2c/be8398a78853a936771e3f5d2b0ff6b63aabb8": "fad8666e78ca1a2ad5333cc9b0646e50",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/83/143f029cb24fa31ebf1de2d9c35ea24ca76ed7": "e8de46e506bc30d2c4be22e31621fc23",
".git/objects/70/66116df7b485a824b2b126632547ff9aa9ba9b": "3e4bfd2af092062555ec6d063aaaae60",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/4a/9a04bc8010f0ca8b684db1d3d16f38bfbdad32": "e726ccc91aad154ec8e5235b66f0d8a0",
".git/objects/24/ab5332482555ef290934ee30396dc5569f8479": "b5adbffeaa8e0882ba76f605cae9bb3b",
".git/objects/12/78bedb0b8ef249768399750e387c0bd75c415d": "efd2e05f448f04d76ea07fd26a621ecf",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/d7373396d4ae8fbe8e2367978a74003dea231e": "d9743d576f90e84363d6961dcb25d50c",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/71/4ea44dac783989ce653d491d4276ef5f8bb554": "c4bf5d0f991cb8386f5925b09e68eba1",
".git/objects/76/57eeb3c76ca99c8d1d661c475bc1b977bfee27": "8ccdef8557ea63562e341c4279f2a75d",
".git/objects/1c/22ce9725d8d24686eb5665a9220f11fc11f523": "ce7c6018e62841dfdc77590580e913d9",
".git/objects/82/a6ff9c532b2ea796302585fa4b4aa951a5fa3b": "f7dbd4c4325c0a43daa7fc9b894e405d",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/49/ef34785dc485d99c73fc722865944a252afdc9": "40bb94e1eabcdfaf1e24ebcf7b0c9486",
".git/objects/47/001c7c454cdf650c9a429f6f44fc2cff1ed35d": "7a578ad4850304838cca105909cb1183",
".git/objects/8b/ec40712a62620478aabaf4377c57dd7b053ecf": "66dab1c61f6356d0fb4ab992df7e7bc5",
".git/objects/8b/239e69465b48b97fe78ce3568929bc2050d08a": "ae6e5c519551a3b2f2ce56f8164ff490",
".git/objects/7f/0ac0d66dff456401ed5d83c7f3f868b0e38c3a": "9eb32b112dd3bba3d0f905c50eff6d35",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/22/d11208d067a9965cba72ef02db6ecfbf224a1a": "e92f8a4e2b142e85418a9da4644dfe8a",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "11e8798b6bee263795b55a3c12a63c54",
".git/logs/refs/heads/master": "f438a655346d67534e4cf9cddf4b306d",
".git/logs/refs/remotes/origin/master": "e6acc7f37190f9a6907b2a5aa35a4da9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "3a8e8d9967d808fb511bcacac4155f7a",
".git/refs/remotes/origin/master": "3a8e8d9967d808fb511bcacac4155f7a",
".git/index": "bab4dc5789eb2985d28e68d8c17cefa7",
".git/COMMIT_EDITMSG": "2797a1844e2fc40ffbfb2c83a6f4b71a",
".git/FETCH_HEAD": "0a5ea69f59fc13f4d5f311a0cd75a82f",
"assets/AssetManifest.json": "4020df421197ce0b5c2526f613dc5b18",
"assets/NOTICES": "228556e27e35abdba2d7eef2253d5608",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "fe7fa69dcab553f91ba0f805dc17cf5c",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/assets/error.png": "6f80497be6fbfe5f23c306ae4dacddb3",
"assets/assets/csc.png": "425b353ba542f21fa77dc2ef969b21e2",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
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
