import React, { useEffect, useRef, useState } from "react";

interface ObserverListProps {
    children(params: any): React.ReactNode,
    toggleClass: string,
    [x: string]: any
}

export function ObserverList({ children, toggleClass, ...props }: ObserverListProps) {
    const observer = useRef<IntersectionObserver|null>(null)
    const [items, setItems] = useState<Array<HTMLLIElement>>([]);

    const saveItem = (item: HTMLLIElement)=> {
        setItems((prevItems: Array<HTMLLIElement>) => [...prevItems, item])
    }

    useEffect(()=> {
        observer.current = new window.IntersectionObserver(entries=> {
            entries.forEach(entry=> {
                entry.target.classList.toggle(toggleClass, entry.isIntersecting)
            })
        });
    }, [])

    useEffect(()=> {
        items.forEach(item=> observer.current?.observe(item))
    }, [items]);

    return (
        <ul {...props}>
            {children({ saveItem })}
        </ul>
    )
}

interface ObservedItem {
    saveItem(param: HTMLElement): void, 
    children: React.ReactNode,
    [x: string]: any
}

export function ObservedItem({ saveItem, children, ...props }: ObservedItem) {
    const liRef = useRef<any>(null);

    useEffect(()=>{
        if (!liRef.current) return;
        saveItem(liRef.current as HTMLLinkElement);
    }, []);

    return (
        <li ref={liRef} {...props}>
            { children }
        </li>
    )
}