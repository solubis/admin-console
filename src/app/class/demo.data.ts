angular.module('angular-ui') 


// =========================================================================
// Header Messages and Notifications list Data
// =========================================================================

    .service('messageService', function () {
        this.data = [
            {

                "id": 1,
                "img": "1.jpg",
                "user": "David Belle",
                "text": "Cum sociis natoque penatibus et magnis dis parturient montes"
            },
            {
                "id": 2,
                "img": "2.jpg",
                "user": "Jonathan Morris",
                "text": "Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel"
            },
            {
                "id": 3,
                "img": "3.jpg",
                "user": "Fredric Mitchell Jr",
                "text": "Phasellus a ante et est ornare accumsan at vel magnauis blandit turpis at augue ultricies"
            },
            {
                "id": 4,
                "img": "4.jpg",
                "user": "Glenn Jecobs",
                "text": "Ut vitae lacus sem ellentesque maximus, nunc sit amet varius dignissim, dui est consectetur neque"
            },
            {
                "id": 5,
                "img": "5.jpg",
                "user": "Bill Phillips",
                "text": "Proin laoreet commodo eros id faucibus. Donec ligula quam, imperdiet vel ante placerat"
            }
        ]

    })
    

// =========================================================================
// Best Selling Widget Data (Home Page)
// =========================================================================

    .service('bestsellingService', function () {
        this.data = [
            {

                "id": 1,
                "img": "note4.jpg",
                "name": "Samsung Galaxy Note 4",
                "range": "$850.00 - $1199.99"
            },
            {
                "id": 2,
                "img": "mate7.jpg",
                "name": "Huawei Ascend Mate",
                "range": "$649.59 - $749.99"
            },
            {
                "id": 3,
                "img": "535.jpg",
                "name": "Nokia Lumia 535",
                "range": "$189.99 - $250.00"
            }
        ]
    })

    
// =========================================================================
// Todo List Widget Data
// =========================================================================

    .service('todoService', function () {
        this.data = [
            {
                "id": 1,
                "todo": "Duis vitae nibh molestie pharetra augue vitae"
            },
            {
                "id": 2,
                "todo": "In vel imperdiet leoorbi mollis leo sit amet quam fringilla varius mauris orci turpis"
            },
            {
                "id": 3,
                "todo": "Suspendisse quis sollicitudin erosvel dictum nunc"
            },
            {
                "id": 4,
                "todo": "Curabitur egestas finibus sapien quis faucibusras bibendum ut justo at sagittis. In hac habitasse platea dictumst"
            },
            {
                "id": 5,
                "todo": "Suspendisse potenti. Cras dolor augue, tincidunt sit amet lorem id, blandit rutrum libero"
            },
            {
                "id": 6,
                "todo": "Proin luctus dictum nisl id auctor. Nullam lobortis condimentum arcu sit amet gravida"
            }
        ]
    })


// =========================================================================
// Recent Items Widget Data
// =========================================================================
    
    .service('recentitemService', function () {
        this.data = [
            {
                "id": 2569,
                "name": "Samsung Galaxy Mega",
                "price": 521
            },
            {
                "id": 9658,
                "name": "Huawei Ascend P6",
                "price": 440
            },
            {
                "id": 1101,
                "name": "HTC One M8",
                "price": 680
            },
            {
                "id": 2569,
                "name": "Samsung Galaxy Alpha",
                "price": 870
            },
            {
                "id": 6598,
                "name": "LG G3",
                "price": 690
            }
        ]
    })


// =========================================================================
// Recent Posts Widget Data
// =========================================================================
    
    .service('recentpostService', function () {
        this.data = [
            {

                "id": 1,
                "img": "1.jpg",
                "user": "David Belle",
                "text": "Cum sociis natoque penatibus et magnis dis parturient montes"
            },
            {
                "id": 2,
                "img": "2.jpg",
                "user": "Jonathan Morris",
                "text": "Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel"
            },
            {
                "id": 3,
                "img": "3.jpg",
                "user": "Fredric Mitchell Jr",
                "text": "Phasellus a ante et est ornare accumsan at vel magnauis blandit turpis at augue ultricies"
            },
            {
                "id": 4,
                "img": "4.jpg",
                "user": "Glenn Jecobs",
                "text": "Ut vitae lacus sem ellentesque maximus, nunc sit amet varius dignissim, dui est consectetur neque"
            },
            {
                "id": 5,
                "img": "5.jpg",
                "user": "Bill Phillips",
                "text": "Proin laoreet commodo eros id faucibus. Donec ligula quam, imperdiet vel ante placerat"
            }
        ]
    })
    
// =========================================================================
// Data Table
// =========================================================================
    
    .service('tableService', [function () {
        this.data = [
            {
                "id": 10238,
                "name": "Marc Barnes",
                "email": "marc.barnes54@example.com",
                "username": "MarcBarnes",
                "contact": "(382)-122-5003"
            },
            {
                "id": 10243,
                "name": "Glen Curtis",
                "email": "glen.curtis11@example.com",
                "username": "GlenCurtis",
                "contact": "(477)-981-4948"
            },
            {
                "id": 10248,
                "name": "Beverly Gonzalez",
                "email": "beverly.gonzalez54@example.com",
                "username": "BeverlyGonzalez",
                "contact": "(832)-255-5161"
            },
            {
                "id": 10253,
                "name": "Yvonne Chavez",
                "email": "yvonne.chavez@example.com",
                "username": "YvonneChavez",
                "contact": "(477)-446-3715"
            },
            {
                "id": 10234,
                "name": "Melinda Mitchelle",
                "email": "melinda@example.com",
                "username": "MelindaMitchelle",
                "contact": "(813)-716-4996"

            },
            {
                "id": 10239,
                "name": "Shannon Bradley",
                "email": "shannon.bradley42@example.com",
                "username": "ShannonBradley",
                "contact": "(774)-291-9928"
            },
            {
                "id": 10244,
                "name": "Virgil Kim",
                "email": "virgil.kim81@example.com",
                "username": "VirgilKim",
                "contact": "(219)-181-7898"
            },
            {
                "id": 10249,
                "name": "Letitia Robertson",
                "email": "letitia.rober@example.com",
                "username": "Letitia Robertson",
                "contact": "(647)-209-4589"
            },
            {
                "id": 10237,
                "name": "Claude King",
                "email": "claude.king22@example.com",
                "username": "ClaudeKing",
                "contact": "(657)-988-8701"
            },
            {
                "id": 10242,
                "name": "Roland Craig",
                "email": "roland.craig47@example.com",
                "username": "RolandCraig",
                "contact": "(932)-935-9471"
            },
            {
                "id": 10247,
                "name": "Colleen Parker",
                "email": "colleen.parker38@example.com",
                "username": "ColleenParker",
                "contact": "(857)-459-2792"
            },
            {
                "id": 10252,
                "name": "Leah Jensen",
                "email": "leah.jensen27@example.com",
                "username": "LeahJensen",
                "contact": "(861)-275-4686"
            },
            {
                "id": 10236,
                "name": "Harold Martinez",
                "email": "martinez67@example.com",
                "username": "HaroldMartinez",
                "contact": "(836)-634-9133"
            },
            {
                "id": 10241,
                "name": "Keith Lowe",
                "email": "keith.lowe96@example.com",
                "username": "KeithLowe",
                "contact": "(778)-787-3100"
            },
            {
                "id": 10246,
                "name": "Charles Walker",
                "email": "charles.walker90@example.com",
                "username": "CharlesWalker",
                "contact": "(486)-440-4716"
            },
            {
                "id": 10251,
                "name": "Lillie Curtis",
                "email": "lillie.curtis12@example.com",
                "username": "LillieCurtis",
                "contact": "(342)-510-2258"
            },
            {
                "id": 10235,
                "name": "Genesis Reynolds",
                "email": "genesis@example.com",
                "username": "GenesisReynolds",
                "contact": "(339)-375-1858"
            },
            {
                "id": 10240,
                "name": "Oscar Palmer",
                "email": "oscar.palmer24@example.com",
                "username": "OscarPalmer",
                "contact": "(544)-270-9912"
            },
            {
                "id": 10245,
                "name": "Lena Bishop",
                "email": "Lena Bishop",
                "username": "LenaBishop",
                "contact": "(177)-521-1556"
            },
            {
                "id": 10250,
                "name": "Kent Nguyen",
                "email": "kent.nguyen34@example.com",
                "username": "KentNguyen",
                "contact": "(506)-533-6801"
            }
        ];
    }])
