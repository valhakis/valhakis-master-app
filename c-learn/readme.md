# C Something Something

## What do I want to do

+ one thing
+ second thing
+ third thing

## Lorem Ipsum

Lorem est alias sapiente fugit adipisicing. Quia itaque ullam libero voluptates earum earum? Quia beatae omnis rerum inventore error quo blanditiis officia odio dignissimos alias. Aperiam consequatur minima fuga odit!

- stdio.h
- float.h

# titel

```c
int a = 'a';

int main() {

   return 0;
}
```

## Defining something

```c
#define NAME "William Valhakis"

int main()
{
   printf("Name: %s\n", NAME);
   return 0;
}
```

## Constant variables

   ```c
int main()
{
   const int WIDTH = 800, HEIGHT = 600;

   printf("Width: %d, Height: %d\n", WIDTH, HEIGHT);

   return 0;
}
```

## Forever loop
   ```c
int main() 
{
   for (;;) {
      printf("This loop will not run forever.\n");
   }
}
```

## Makefile
```makefile
all: main.c
gcc -o app $^
```

## Array

```c
int main()
{
   int array[10], i, j;

   for (i=0; i<10; i++) {
      array[i] = i + 5;
   }

   for (j=0; j<10; j++) {
      printf("element[%d]: %d\n", j, n[j]);
   }

   return 0;
}
```
