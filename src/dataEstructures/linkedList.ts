class ListNode<T> {
  public data: T;
  public next: ListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

export default class LinkedList<T> {
  private head: ListNode<T> | null;
  private tail: ListNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  // PushFront(Key) - Add to front
  protected pushFront(key: T): void {
    const newNode = new ListNode(key);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // TopFront() - Return front item
  protected topFront(): T | null {
    return this.head ? this.head.data : null;
  }

  // PopFront() - Remove front item
  protected popFront(): void {
    if (this.head) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
    }
  }

  // PushBack(Key) - Add to back
  protected pushBack(key: T): void {
    const newNode = new ListNode(key);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // TopBack() - Return back item
  protected topBack(): T | null {
    return this.tail ? this.tail.data : null;
  }

  // PopBack() - Remove back item
  protected popBack(): void {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }
    let current = this.head;
    while (current?.next !== this.tail) {
      current = current?.next || null;
    }
    current.next = null;
    this.tail = current;
  }

  // Find(Key) - Is key in list?
  protected find(key: T): boolean {
    let current = this.head;
    while (current) {
      if (current.data === key) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // Erase(Key) - Remove key from list
  protected erase(key: T): void {
    if (!this.head) {
      return;
    }
    if (this.head.data === key) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      return;
    }
    let current = this.head;
    while (current?.next) {
      if (current.next.data === key) {
        current.next = current.next.next;
        if (!current.next) {
          this.tail = current;
        }
        return;
      }
      current = current.next;
    }
  }

  // Empty() - Is the list empty?
  protected empty(): boolean {
    return !this.head;
  }

  // AddBefore(Node, Key) - Add key before node
  protected addBefore(node: T, key: T): void {
    if (!this.head) {
      return;
    }
    if (this.head.data === node) {
      const newNode = new ListNode(key);
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current?.next) {
      if (current.next.data === node) {
        const newNode = new ListNode(key);
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }
}


