const menu = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: "Explore",
        path: '/explore',
        subpages: [
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
            },
            {
                name: "Blog",
                path: 'blog'
            }
        ]
    }
]

// Oefening:
// Log al de pagina's en hun path in de console.
// 1. ZONDER RECURSIE
function showItem(item) {
    console.log('Name: ', item.name, '-- ', item.path);
}

function showMenuWithoutRecursion(list) {
    for (const item of list) {
        showItem(item);

        if (item.subpages) {
            for (const subitem of item.subpages) {
                showItem(subitem);

                if (subitem.subpages) {
                    for (const subsubitem of subitem.subpages) {
                        showItem(subsubitem);
                    }
                }
            }
        }
    }
}

// showMenuWithoutRecursion(menu);

// 2. MET RECURSIE
function showMenuWithRecursion(list) {
    for (const item of list) {
        showItem(item);

        if (item.subpages) {
            showMenuWithRecursion(item.subpages);
        }
    }
}

showMenuWithRecursion(menu);