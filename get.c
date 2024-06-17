 #include <stdio.h>

// Function to perform addition
void addition()
{
    int a, b;
    printf("Enter two numbers to add: ");
    scanf("%d %d", &a, &b);
    printf("Sum: %d\n", a + b);
}

// Function to perform subtraction
void subtraction()
{
    int a, b;
    printf("Enter two numbers to subtract (a - b): ");
    scanf("%d %d", &a, &b);
    printf("Difference: %d\n", a - b);
}

// Function to perform multiplication
void multiplication()
{
    int a, b;
    printf("Enter two numbers to multiply: ");
    scanf("%d %d", &a, &b);
    printf("Product: %d\n", a * b);
}

int main()
{
    int choice;

    while (1)
    {
        printf("Menu:\n");
        printf("1. Addition\n");
        printf("2. Subtraction\n");
        printf("3. Multiplication\n");
        printf("4. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            addition();
            break;
        case 2:
            subtraction();
            break;
        case 3:
            multiplication();
            break;
        case 4:
            printf("Exiting the program. Goodbye!");
            return 0;
        default:
            printf("Invalid choice! Please try again.\n");
        }
    }

    return 0;
}
