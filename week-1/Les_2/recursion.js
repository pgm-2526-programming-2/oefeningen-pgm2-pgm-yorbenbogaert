// Oproepen van zijn eigen functie.

let amountOfMessages = 0;

function showMessage() {
    console.log('Hoi!');

    amountOfMessages = amountOfMessages + 1;

    if (amountOfMessages === 10) return;

    showMessage();
}

showMessage()

// Use Case? Maken van een menu met submenus, en die hebben weer submenus, ... Tree -> Lijst

const menu = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "Explore",
        path: '/explore',
        subages: [
            {
                name: "Awards",
                path: '/awards',
                subpages: [
                    {
                        name: "Nominees",
                        path: '/nominees'
                    },
                    {
                        name: "Sites of the day",
                        path: '/sotd'
                    }
                ]
            }
        ]
    }
]

// Oefening:
//Log al de paginas en hun path in de console.
//1. zonder recursie
//function withoutRecursion(list) {
    //for (const item of list) {
        //console.log('name: ', item.name, ' path: ', item.path );

        //if (item.subpages) {
            //for (const subitem of item.subpages) {
            //console.log('name: ', subitem.name, ' path: ', subitem.path);
        //}
        //}

        //if (subitem.subpages) {
            //for (const subsubitem of subitem.subpages) {
            //console.log('name: ', subsubitem.name, ' path: ', subsubitem.path)
        //}
        //}
    //}
//}

//withoutRecursion(menu);


function showItem() {
    console.log('Name: ', item.name, ' path: ', item.path);
}
//2. Met recursie
function showMenuWithRecursion(list) {
    for (const item of list) {
        
        showItem(item);

        if (item.subpages) {
            showMenuWithRecursion(item.subpages);
        }
    }

}

showMenuWithRecursion(menu);