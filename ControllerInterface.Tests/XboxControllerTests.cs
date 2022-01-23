using ControllerInterface.Controllers;
using NSubstitute;
using NUnit.Framework;

#pragma warning disable CS8602 // Dereference of a possibly null reference.

namespace ControllerInterface.Tests;

public class XboxControllerTests
{
    public IXboxController? Controller { get; private set; }

    [OneTimeSetUp]
    public void Setup()
    {
    }

    [Test]
    public void ControllerIsConnected()
    {
        Controller = CreateMockController();
        Controller.Update();

        var controllerIsConnected = Controller.IsConnected;

        Controller.Received().Update();
        Assert.That(controllerIsConnected, Is.True);
    }

    [Test]
    public void ControllerAButtonPressed()
    {
        Controller = CreateMockController(); ;
        Controller.Update();


        Controller.Received().Update();
        Assert.That(Controller.AButton, Is.True);
    }

    [Test]
    public void ControllerBButtonPressed()
    {
        Controller = CreateMockController(); ;
        Controller.Update();


        Controller.Received().Update();
        Assert.That(Controller.BButton, Is.True);
    }

    [Test]
    public void ControllerXButtonPressed()
    {
        Controller = CreateMockController(); ;
        Controller.Update();


        Controller.Received().Update();
        Assert.That(Controller.XButton, Is.True);
    }

    [Test]
    public void ControllerYButtonPressed()
    {
        Controller = CreateMockController(); ;
        Controller.Update();


        Controller.Received().Update();
        Assert.That(Controller.YButton, Is.True);
    }


    private static IXboxController CreateMockController()
    {
        var controller = Substitute.For<IXboxController>();
        controller.When(xboxController => xboxController.Update())
            .Do(x =>
            {
                controller.IsConnected = true;
                controller.AButton = true;
                controller.BButton = true;
                controller.XButton = true;
                controller.YButton = true;
            });

        return controller;
    }
}